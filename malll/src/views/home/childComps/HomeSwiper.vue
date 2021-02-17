<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data(){
    return{
      isLoad:false
    } 
    },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    //事件发出一次就行
    swiperLoad(){
      if(!this.isLoad){
        this.$emit('swiperimgload')
        this.isLoad=true
      }
      
    }
    }
};
</script>

<style>
</style>