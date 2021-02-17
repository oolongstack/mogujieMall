<template>
  <div id="detail">
    <detail-nav-bar @titclick="titlClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type='3'>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imgLoad" ></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo='commentInfo'></detail-comment-info>
    </scroll>
    <back-top @click.native="backTop" v-show="isConShow"></back-top>
    <detail-bottom-bar @addcart='addToCart'></detail-bottom-bar>
    <!-- <toast :message='message' :show='show'/>   -->
    </div>
</template>
 
<script>
import Scroll from "components/common/scroll/Scroll";
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import {backTopMixin} from 'common/mixin.js'
// import Toast from 'components/common/toast/Toast'
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    // Toast
    
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      topY: [],
      commentInfo:{},
      currentIndex:0,
      // message:'',
      // show:false,
    };
  },
  created() {
    //1传入保存的iid
    this.iid = this.$route.params.iid;
    //   console.log(this.$route);
    //根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //   console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //在Goods类里获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详细信息
      this.detailInfo = data.detailInfo;
      // console.log(this.detailInfo);
      //获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
           //获取评论
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
      // console.log(this.paramInfo);
      //此方法等内容渲染完执行一次这个函数
      //这里的值不对是因为图片没有加载
      //也不能在，mounted里面写 因为依然没有元素el 只能在nextTick()里 但是nextTick只能保证DOM渲染完但是图片不一定加载完
      // this.$nextTick(() => {
      //   this.topY=[]
      //   this.topY.push(0);
      //   this.topY.push(this.$refs.params.$el.offsetTop);
      //   console.log(this.topY);
      // });
    });
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();

      //所以说要在图片渲染完后再计算高度
      this.topY = [];
      this.topY.push(0);
      this.topY.push(this.$refs.params.$el.offsetTop);
      this.topY.push(this.$refs.comment.$el.offsetTop)
      this.topY.push(Number.MAX_VALUE)
      // console.log(this.topY);
    },
    titlClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topY[index], 300);
    },
    contentScroll(position) {
      // 决定是否显示回到顶部图标
      this.isConShow=(-position.y)>2000
      // console.log(position);
      //获取y
      const positionY = -position.y
      let length =this.topY.length
      for (let i =0;i<length-1;i++){
        // if(positionY>this.topY[i] && positionY<this.topY[i+1]){
        //   console.log(i);
        // }
        // if(this.currentIndex !== i &&((i<length-1 && positionY > this.topY[i] && positionY < this.topY[i+1])||(i===length-1 && positionY > this.topY[i]))){
        //   this.currentIndex = i
        //   this.$refs.nav.nowIndex=this.currentIndex
        // }
        if(this.currentIndex !== i &&(positionY >= this.topY[i] && positionY < this.topY[i+1])){
          this.currentIndex=i
          this.$refs.nav.nowIndex=this.currentIndex
        }
      }
    },
    addToCart(){
      //获取购物车需要展示的信息
      const product={}
      product.img=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      product.iid=this.iid
      // console.log(product);

      //将商品信息传入到仓库
      this.$store.dispatch('addCart',product).then(res=>{
      //   this.show = true
      //   this.message = res
      //   setTimeout(() =>{
      //     this.show = false
      //     this.message = ''
      //   },1000)
      this.$toast.show(res,1500)
      })
     
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 100px);
}
</style>