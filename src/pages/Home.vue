<template>
  <div id="book">
    <h1 id="book_title">图书借阅排行榜</h1>
    <table>
      <tr>
        <td>排名</td>
        <td>图书条形码</td>
        <td>图书名称</td>
        <td>图书类型</td>
        <td>书架</td>
        <td>出版社</td>
        <td>作者</td>
        <td>定价(元)</td>
        <td>借阅次数</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

table {
  collapse: 0px;
  border-collapse: collapse;
}

td {
  color: #868E8E;
  padding: 16px 5px;
  font-style: revert;
  text-align: center;
  font-weight: bolder;
}

#book {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  flex-direction: column;
  border-radius: 4px;
  background-color: rgba(254, 254, 254, 1);
  box-shadow: -1px -1px 5px 0 rgba(0,0,0,.1);
}

#book h1 {
  color: #868E8E;
  margin-left: 40px;
}

#book table {
  margin-top: 50px;
}
</style>