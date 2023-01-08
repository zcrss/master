<template>
  <div id="app">
<!--  router-link实现路由切换  -->
    <router-link active-class="active" to="/a1">1</router-link>
    <router-link active-class="active" to="/a2">2</router-link>
    <div>
<!--   路由组件展现的位置   -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#active a{
  color: black;
}
a {
  display: block;
  color: #42b983;
}
</style>
