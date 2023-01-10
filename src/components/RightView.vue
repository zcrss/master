<template>
  <div id="rightView">
    <div class="view">
      <div id="messget">
        <table class="head">
          <thead>
          <tr class="theader">
            <th>id</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>职位</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody class="mheader">
          <th>xx</th>
          <th>xx</th>
          <th>xx</th>
          <th>xx</th>
          <th>xx</th>
          <th>
            <button class="btn">修改</button>
            <button class="btn">删除</button>
          </th>
          </tbody>
        </table>
      </div>
    </div>
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
  background-color: rgb(93, 49, 49);
  float: right;
}
.view {
  width: 98%;
  height: 98%;
  margin-left: 1%;
  margin-top: 1%;
  background-color: rgb(255, 255, 255);
}

.head {
  width: 100%;
}
.theader th{
  background-color:#E9F5FE;
}
.mheader {
  background-color: #F7FCFF;
}
</style>