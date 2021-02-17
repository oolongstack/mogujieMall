<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <div><img class="icon service" src="~assets/images/detail/service.png"/></div>
        <div><span class="text">客服</span></div>
      </div>
      <div>
         <div><img class="icon shop" src="~assets/images/detail/shop.png"></div>
        <div><span class="text">店铺</span></div>
      </div>
      <div>
         <div><img class="icon select" src="~assets/images/detail/collect.png"></div>
        <div><span class="text">收藏</span></div>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="AddToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    AddToCart(){
      this.$emit('addcart')
    }
  }
}
</script>

<style>
.bottom-bar{
  display: flex;
  text-align: center;
  height: 55px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left>div{
  margin-top: 3px;
  text-align: center;
}
.bar-left .icon{
  cursor: pointer;
  width: 25px;
}
.bar-right .cart{ 
  height: 55px;
  cursor: pointer;
  line-height: 55px;
  background-color: yellow;
}
.bar-right .buy{
  cursor: pointer;
  color: #fff;
   height: 55px;
  line-height: 55px;
  background-color: rgb(235, 79, 162);
}
</style>