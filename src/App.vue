<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <RightView></RightView>

<!--&lt;!&ndash;  router-link实现路由切换  &ndash;&gt;-->
<!--    <router-link active-class="active" to="/a1">1</router-link>-->
<!--    <router-link active-class="active" to="/a2">2</router-link>-->
<!--    <div class="show">-->
<!--&lt;!&ndash;   路由组件展现的位置   &ndash;&gt;-->
<!--      <router-view></router-view>-->
<!--    </div>-->
  </div>
</template>

<script>


import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
import RightView from "@/components/RightView.vue";

export default {
  name: 'App',
  components: {
    RightView,
    Navigation,
    Header,
  }
}
</script>

<style scoped>

</style>
