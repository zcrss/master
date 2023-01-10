<template>
  <div id="header">
    <div class="hname">管理系统管理系统管理</div>
    <div class="uname">
      <a href="javaScript:;">username</a>
      <div class="xx">
        123456
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>
#header {
  width:100%;
  height: 65px;
  background-color: rgb(95, 95, 201);
}
.hname {
  margin-left: 40%;
  font-size: 30px;
}

.uname {
  margin-left: 85%;
  margin-right: 10%;
  font-size: 15px;
}
.uname a{
  text-decoration: none;
  color: black;

}
.xx {
  height: 300px;
  width: 200px;
  margin-left: -65px;
  background-color: red;
  display: none;
  position: absolute;
}
.uname:hover .xx {
  display: block;
}
</style>