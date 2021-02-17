<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !==0">
      <div class="info-desc">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      counter:0,
      imagesLength:0
    } 
    },
  props: {
    detailInfo: {
      type: Object
    }
  },
  methods: {
    imgLoad() {
      //如果所有图片都加载完了，那么就进行一次回调
      this.counter +=1
      if(this.counter === this.imagesLength){
        this.$emit('imageLoad')
      }
    }  
  },
  watch: {
    detailInfo(){
      this.imagesLength=this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.info-desc{
  margin-top:20px;
}
.desc{
  font-size: 14px;
  color: #666;
}
.info-key{
  margin-top:20px;
}
.info-list img{
  width:100% ;
}
</style>