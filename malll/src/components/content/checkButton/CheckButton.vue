<template>
  <div class="check-button">
      <img src="~assets/images/cart/tick.svg" alt="" :class="{checked:isChecked}">
  </div>
</template>

<script>
export default {
    props: {
        isChecked: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.check-button {
 
  text-align: center;
}
.check-button img{
    border-radius: 50%;
    border: 1px solid #aaa;

}
.checked{
    border-color: deeppink;
    background-color: deeppink;
}
</style>