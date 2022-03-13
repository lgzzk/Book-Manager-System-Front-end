<template>
  <div id="login">
    <ISVG
        class="icon"
        :svg="svg"
    />
    <span>BOOKMANAGE</span>
    <div class="form" @keyup.enter="login">
      <input type="text" placeholder="用户" v-model="name"/>
      <input type="password" placeholder="密码" v-model="password"/>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import ISVG from "@/components/ISVG";
import axios from "axios";

export default {
  name: "Login",
  components: {ISVG},
  data() {
    return {
      svg: {
        title: '图书管理',
        xlink: '#icon-shujia'
      },
      name: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (!this.name) {
        this.message('error', '请输入用户名！')
        return
      }
      if (!this.password) {
        this.message('error', '请输入用户密码！')
      }

      axios.post("http://192.168.18.7:8081/BookManagerSystem/managers/login", {
        "name": this.name,
        "password": this.password
      }).then(({data}) => {
        console.log(data)
        if (data.code === 200) {
          localStorage.setItem("access-admin", data.result.token)
          this.$router.replace('/index')
        }
      })
    },
    message(type, message) {
      this.$message({
        message,
        type
      })
    }
  }

}
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  /*background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);*/
  /*background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);*/
}

.icon {
  width: 150px;
  height: 150px;
  vertical-align: center;
  overflow: hidden;
  fill: #5AC2EE;
}

.form {
  height: 130px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

input {
  width: 300px;
  height: 35px;
  padding: 15px;
  color: #868E8E;
  border: 2px #dcdcdc solid;
  outline: none;
  font-size: 20px;
  border-radius: 5px;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
}

input:focus {
  border: 2px #5AC2EE solid;
}

button {
  width: 300px;
  color: #fefefe;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #5AC2EE;
}

button:active {
  background-color: #3cb1e3;
}

span {
  color: #5AC2EE;
  font-size: 40px;
  margin-left: 5px;
  font-weight: 900;
  font-family: "Segoe UI";
}
</style>