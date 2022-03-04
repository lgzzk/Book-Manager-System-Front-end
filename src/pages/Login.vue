<template>
  <div id="login" draggable>
    <ISVG
        class="icon"
        :svg="svg"
    />
    <span>BOOKMANAGER</span>
    <form>
      <input type="text" placeholder="用户"/>
      <input type="password" placeholder="密码"/>
      <button @click="test">登录</button>
    </form>
  </div>
</template>

<script>
import ISVG from "@/components/ISVG";
export default {
  name: "Login",
  components: {ISVG},
  data(){
    return {
      svg: {
        title: '图书管理',
        xlink: '#icon-shujia'
      }
    }
  },
  methods: {
    test(){
      console.log('???')
    }
  }

}
</script>

<style scoped>
  #login{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    /*background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);*/
  }

  .icon {
    width: 150px;
    height: 150px;
    vertical-align: center;
    overflow: hidden;
  }

  form{
    height: 130px;
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  input{
    height: 35px;
    padding: 15px;
    color: #868E8E;
    border: none;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  }

  button{
    width: 273px;
    /*height: 35px;*/
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #5AC2EE;
  }

  span {
    color: #5AC2EE;
    font-size: 40px;
    margin-left: 5px;
    font-weight: 900;
    font-family: "Segoe UI";
  }
</style>