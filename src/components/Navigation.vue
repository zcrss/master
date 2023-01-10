<template>
  <div id="nav">
    <div id="navf">
      <ul>
        <li>
          <a href="javaScript:;">首页</a>
        </li>
        <li>
          <a href="javaScript:;">员工信息</a>
        </li>
        <li>
          <a href="javaScript:;">信息管理</a>
        </li>
        <li>
          <a href="javaScript:;">部门管理</a>
        </li>
        <li>
          <a href="javaScript:;">请假审批</a>
        </li>
        <li>
          <a href="javaScript:;">部门管理</a>
        </li>
        <li>
          <a href="javaScript:;">职位管理</a>
        </li>
        <li>
          <a href="javaScript:;">系统管理</a>
        </li>
        <li>
          <a href="javaScript:;">考勤管理</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation"
}
</script>

<style scoped>

#nav {
  width: 10%;
  height: 100vh;
  background-color: #2B3F56;
  /*float: left;*/
}
#nav ul li {
  list-style: none;
  line-height: 50px;
}
#nav ul li a {
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
}
#nav ul li a:hover{
  background-color: #1B293B;
  color: rgb(78, 158, 255);
}
</style>