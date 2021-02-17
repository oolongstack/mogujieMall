<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info-title {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  padding: 3px 5px;
}
.info-price {
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  padding: 3px 5px;
}
.info-price span {
  margin-right: 5px;
}
.n-price {
  color: hotpink;
  font-size: 20px;
}
.o-price {
  color: #ccc;
  text-decoration: line-through;
  font-size: 12px;
}
.discount {
  height: 20px;
  color: #fff;
  background-color: deeppink;
  padding: 2px;
  font-size: 14px;
  border-radius: 8px;
}
.info-other {
  margin: 15px 5px 0;
  display: flex;
  height: 20px;
  line-height: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.info-other span {
  font-size: 12px;
  color: #ccc;
}
.info-service {
  margin-top: 10px;
  display: flex;
  border-bottom: 5px solid rgb(228, 227, 227);
  justify-content: space-between;
}
.info-service-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.info-service-item:nth-last-child(1) {
  text-align: right;
}
.info-service img {
  width: 12px;
}
</style>