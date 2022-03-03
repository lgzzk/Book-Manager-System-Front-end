<template>
  <div id="header">
    <span>图书管理系统</span>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  #header{
    width: 100%;
    height: 100px;
    z-index: 10;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #fefefe;
  }

  span{
    font-size: 50px;
  }
</style>