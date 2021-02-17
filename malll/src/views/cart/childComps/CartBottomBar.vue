<template>
  <div class="bottom-bar1">
    <div class="checkkk">
      <check-button
        class="btn1"
        :isChecked="isSelectAll"
        @click.native="allSelClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计:{{ totalPrice }}</div>
    <div class="calc" @click="jiSuan">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return parseInt(preValue) + parseInt(item.price * item.count);
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => {
        return !item.checked;
      });
    },
  },
  methods: {
    allSelClick() {
      //全部选中的情况
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        //有不选中的或者全都不选中
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    jiSuan() {
      if (this.checkLength === 0) {
        this.$toast.show('请添加商品',1500);
      }
    },
  },
};
</script>

<style>
.bottom-bar1 {
  display: flex;
  height: 40px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
}
.checkkk {
  display: flex;
  width: 80px;
  margin-left: 10px;
}
.checkkk span {
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.btn1 {
  margin-top: 10px;
  margin-right: 5px;
}
.price {
  flex: 1;
  line-height: 40px;
}
.calc {
  background-color: red;
  width: 100px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>