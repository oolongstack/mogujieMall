<template>
  <div class="cart">
    <!-- 导航-->
    <nav-bar class="navbar">
      <div slot='center'>购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 购物车列表-->
    <cart-list></cart-list>
    <!-- 底部汇总-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style>
.cart{
  height:100vh;
  position: relative;
}
  .navbar {
    height: 49px;
    background-color: deeppink;
    font-size: 18px;
    color: #fff
  }
</style>