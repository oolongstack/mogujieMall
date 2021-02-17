<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommenditem">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommenditem{
    flex: 1;

}
.recommenditem img{
    width: 65px;
    height: 65px
}
</style>