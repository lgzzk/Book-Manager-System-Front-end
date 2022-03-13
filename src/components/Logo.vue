<template>
  <div id="logo" draggable>
    <ISVG
        class="icon"
        :svg="svg"
    />
    <span>BOOKMANAGE</span>
  </div>
</template>

<script>
import ISVG from "@/components/ISVG";
export default {
  name: "Logo",
  components: {ISVG},
  data(){
    return {
      svg: {
        title: '图书管理',
        xlink: '#icon-shujia'
      }
    }
  }
}
</script>

<style scoped>
#logo{
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  user-select: none;
}

span {
  font-size: 30px;
  margin-left: 5px;
  font-weight: 900;
  font-family: "Segoe UI";
}

.icon {
  width: 35px;
  height: 35px;
  vertical-align: center;
  overflow: hidden;
  fill: #5AC2EE;
}
</style>