<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key='index' :goodsItem='item'></goods-list-item>
     <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>