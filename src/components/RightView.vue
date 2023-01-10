<template>
  <div id="rightView">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "RightView"
}
</script>

<style scoped>
#rightView {
  width: 90%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  float: left;
}
</style>