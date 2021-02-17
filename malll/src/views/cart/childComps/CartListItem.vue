<template>
  <div class="cart-list-item" v-if="Object.keys(product).length !== 0">
    <check-button
      :isChecked="product.checked"
      @click.native="checkClick"
      class="btn"
    ></check-button>
    <div class="images"><img :src="product.img" alt="" /></div>
    <div class="shop">
      <div class="title">{{ product.title }}</div>
      <div class="desc">{{ product.desc }}</div>
      <div class="prinum">
        <div class="price">￥{{ (product.price * product.count).toFixed(2) }}</div>
        <div class="num">
          <!-- <input type="button" value="-" @click="des" />
          {{ count }}
          <input type="button" value="+" @click="inc" /> -->
          x{{ product.count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CheckButton,
  },
  data() {
    return {
      // count: 1,
      // addprice:0
    };
  },
  methods: {
    // des() {
    //   if (this.count > 1) {
    //     this.count--;
    // this.$bus.$emit('descrement',{
    //  addprice: this.count * this.product.price
    // })
    //   }
    // },
    // inc() {
    //   this.count++;
    // this.$bus.$emit('increment',{
    //    addprice: this.count * this.product.price
    //   })
    // },
    checkClick() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style >
.cart-list-item {
  height: 120px;
  display: flex;
  border-bottom: 0.5px solid #ccc;
}
.btn {
  width: 10%;
  height: 120px;
  line-height: 120px;
}
.images {
  width: 25%;
  padding: 10px;
}
.images img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.shop {
  width: 65%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.shop > div {
  flex: 1;
}
.title {
  margin-top: 8px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc {
  margin-top: 8px;
  overflow: hidden;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.prinum {
  display: flex;
}
.prinum > div {
  margin-top: 8px;
  flex: 1;
}
.price {
  color: deeppink;
}
.num {
  text-align: right;
  padding-top: 10px
}
</style>