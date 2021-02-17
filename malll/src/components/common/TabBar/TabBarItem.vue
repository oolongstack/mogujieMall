<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {
      isActive() {
          return this.$route.path.indexOf(this.path) != -1
      }
  },

  props: {
      path:String
  },
  methods: {
      itemClick(){
          this.$router.replace(this.path)
      }
  }
};
</script>

<style>
.tab-bar-item {
  text-align: center;
  flex: 1;
}
.tab-bar-item img {
  margin: 2px 0;
  width: 24px;
  height: 24px;
}
.active {
  color: deeppink;
}
</style>