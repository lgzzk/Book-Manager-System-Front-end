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
      <tr v-for="(b, i) in borrowOrder"
          :key="b.barcode"
      >
        <td>{{i+1}}</td>
        <td>{{b.barcode}}</td>
        <td>{{b.bookName}}</td>
        <td>{{b.typeName}}</td>
        <td>{{b.caseName}}</td>
        <td>{{b.pubName}}</td>
        <td>{{b.author}}</td>
        <td>{{b.price}}</td>
        <td>{{b.count}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  created() {
    axios.get('http://localhost:8081/BookManagerSystem/borrowOrder')
        .then(({data}) => {
          console.log(data)
          this.borrowOrder = data.result
        })
  },
  data() {
    return {
      borrowOrder: null
    }
  }
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
  flex-direction: column;
}

#book h1 {
  color: #868E8E;
  margin-left: 40px;
}

#book table {
  margin-top: 50px;
}
</style>