<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="left" class="left">
        <img src="~assets/images/common/back.svg" alt="" @click="backHome" />
      </div>
      <div slot="center" class="center">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="centerli"
          @click="ceiClick(index)"
          :class="{ change: index === nowIndex }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      nowIndex: 0,
    };
  },
  methods: {
    ceiClick(index) {
      this.nowIndex = index;
      this.$emit("titclick",index);
    },
    backHome() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail-navbar {
  box-shadow: 1px 1px 1px #ccc;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.center {
  display: flex;
  font-size: 14px;
}
.left img {
  width: 20px;
  margin-top: 12px;
}
.centerli {
  flex: 1;
}
.change {
  color: deeppink;
}
</style>