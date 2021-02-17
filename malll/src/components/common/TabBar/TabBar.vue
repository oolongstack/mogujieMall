<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  position: fixed;
  font-size: 15px;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
width: 100%;
  background-color: #f2f2f2;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
</style>