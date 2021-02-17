<template>
  <div class="tab-contral">
    <div v-for="(item, index) in titles" :key="index" :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentIndex:0
    };
  },
  methods: {
      itemClick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)
      }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.tab-contral {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
  z-index: 9;
}
.tab-contral div {
  flex: 1;
}
.tab-contral span{
    padding: 5px;
}
.active {
  color: deeppink;
  }
  .active span{
      border-bottom: 2px solid deeppink;
  }
</style>