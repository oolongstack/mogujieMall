<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" :alt="shop.name" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
        <div class="shop-middle-item">
            <div class="info-sells">
                <div class="sells-count">
                    {{shop.sells | sellCountFilter}}
                </div>
                <div class="sells-text">总销量</div>
            </div>
            <div class="info-goods">
                <div class="goods-count">
                    {{shop.goodsCount}}
                </div>
                <div class="goods-text">全部宝贝</div>
            </div>
        </div>
        <div class="shop-middle-item">
            <table>
                <tr v-for="(item,index) in shop.score" :key="index">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                </tr>
            </table>
        </div>
    </div>
    <div class="shop-bottom">
        <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
      sellCountFilter: function(value){
          if (value<10000) return value;
          return(value/10000).toFixed(1) + '万'
      }
  }
};
</script>

<style scoped>
.shop-top{
    height: 80px;
    position: relative;
}
.shop-top img{
    width: 50px;
    margin-top: 15px;
    margin-left: 10px;
    }
  .title{
      position: absolute;
      top: 30px;
      left: 68px;
    }  
    .shop-middle{
        display: flex;
        height: 100px
    }
    .shop-middle-item{
        flex: 1;
    }
    .shop-middle-item:nth-child(1){
        display: flex;
    } 
    /* .shop-middle-item:nth-child(2){
        text-align: center;
    } */
     .shop-middle-item:nth-child(2) table{
        height: 100px;
        text-align: center;
      margin: 0 auto;
    }

    .shop-middle-item:nth-child(1) div{
        flex: 1;
        text-align: center;
    }
    .sells-count,
    .goods-count{
      margin-top:30px;
    }
    .goods-count,
    .goods-text{
        border-right: 1px solid #ccc;
    }
    .shop-bottom{
        margin-top:10px;
        position: relative;
        height: 30px;
    }
    .enter-shop{
       position: absolute;
       height: 30px;
       width: 200px;
       text-align: center;
       line-height: 30px;
       left: 50%;
       cursor: pointer;
       border-radius: 20px;
       transform: translateX(-50%);
       background-color: rgb(215, 245, 246);  
    }
    .score,.better{
        color: rgb(83, 230, 15);
    }
    .score-better{
        color: red;
    }
    .better-more{
        color: rgb(231, 66, 66);
    }
</style>