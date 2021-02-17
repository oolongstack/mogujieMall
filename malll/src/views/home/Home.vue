<template>
    <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <Scroll class="content" ref="gun" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp='loadMore'>
      <home-swiper :banners="banners" @swiperimgload='swiperImgLoad'></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-contral :titles="titles" @tabClick='tabClick' ref="tabContral" ></tab-contral>
    <goods-list :goods="goods[currentType].list"></goods-list>
    </Scroll>
    <back-top @click.native="backTop" v-show="isConShow"></back-top>
  </div>

</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import HomeSwiper from "views/home/childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import FeatureView from "./childComps/FeatureView";
import TabContral from "components/content/tabContral/TabContral";
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from 'components/content/backtop/BackTop'

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabContral,
    GoodsList,
    Scroll,
    BackTop
    
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType:'pop',
      isConShow:false,
      tabOffsetTop:0,
      isFixed:false,
      saveY:0
    };
  },
  created() {
    //1请求多个数据
    this.getHomeMultidata();
    //2请求商品信息
    this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');
  },
  mounted() {
      //监听图片加载完成 
      //并且调用函数防抖
      const refresh = this.debounce(this.$refs.gun.refresh,50)
     this.$bus.$on('itemImgLoad',()=>{
         refresh()
     })
  },
  methods: {
    swiperImgLoad(){
       //获取tabcontral的offsettop
     //所有组件都有一个$el属性 用于选择组件中的元素
     this.tabOffsetTop=this.$refs.tabContral.$el.offsetTop
      
    },
    activated() {
      this.$refs.gun.scroll.scrollTo(0,this.saveY,0)
      this.$refs.gun.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.gun.scroll.y
    },
    //函数防抖
    debounce(func,delay){
      let timer = null;
      return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
         this.goods[type].page+=1
         //完成上啦加载更多
         this.$refs.gun.finishPullUp()
      });
    },
    tabClick(index){
      if(index == 0){
        this.currentType = 'pop'
      }else if(index ==1){
        this.currentType = 'new'
        
      }else{
        this.currentType = 'sell'
      }
    },
    backTop(){
      this.$refs.gun.scrollTo(0,0,500)
  },
 contentScroll(position){
  //  console.log(position);决定是否显示回到顶部图标
  this.isConShow=(-position.y)>2000
  //判断position.y的值是否 大于offsettopde值
  this.isFixed=(-position.y)>this.tabOffsetTop
 },
  loadMore() {
    // console.log('到底了');
    this.getHomeGoods(this.currentType)
  }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  padding-top: 44px;
}
.content {
  /* height: 300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  }
.home-nav {
width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: deeppink;
  font-size: 18px;
  color: white;
  z-index: 9;
}

</style>