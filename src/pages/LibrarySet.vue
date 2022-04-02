<template>
  <div id="library-set">
    <ContentHeader :text="text"/>
    <div class="library-set-content">
      <form @submit="save">
        <div class="form-item">
          <span class="form-span">图书馆名称</span>
          <input type="text" required v-model="library.libraryName"/>
        </div>
        <div class="form-item">
          <span class="form-span">馆长</span>
          <input type="text" required v-model="library.curator"/>
        </div>
        <div class="form-item">
          <span class="form-span">联系电话</span>
          <input type="tel" required v-model="library.tel"/>
        </div>
        <div class="form-item">
          <span class="form-span">联系地址</span>
          <input type="text" v-model="library.address"/>
        </div>
        <div class="form-item">
          <span class="form-span">联系邮箱</span>
          <input type="email" required v-model="library.email"/>
        </div>
        <div class="form-item">
          <span class="form-span">图书馆网址</span>
          <input type="url" required v-model="library.url"/>
        </div>
        <div class="form-item">
          <span class="form-span">键馆时间</span>
          <input type="date" required v-model="library.createDate"/>
        </div>
        <div class="form-item">
          <span class="form-span">图书馆介绍</span>
          <textarea cols="30" rows="9" required v-model="library.introduce"></textarea>
        </div>
        <button>保存</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ContentHeader from "@/components/ContentHeader";

export default {
  name: "LibrarySet",
  components: {ContentHeader},
  created() {
    axios.get(`http://localhost:8081/BookManagerSystem/library/1`)
        .then(({data}) => {
          this.library = data.result
        })
  },
  data() {
    return {
      text: '图书馆信息',
      library: {
        id: null,
        libraryName: null,
        curator: null,
        tel: null,
        address: null,
        email: null,
        url: null,
        createDate: null,
        introduce: null
      }
    }
  },
  methods: {
    save(e) {
      let library = this.library
      axios.put('http://localhost:8081/BookManagerSystem/library', {
        ...library
      }).then(({data}) => {
        if (data.code === 200) {
          alert("保存成功！")
        }
      })
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
#library-set {
  width: 100%;
  height: 100%;
}

.library-set-content {
  height: 90%;
  display: flex;
  flex-shrink: 0;
  overflow: auto;
  justify-content: center;
}

.form-item {
  width: 100%;
  padding: 15px 0px 15px 0px;
}

.form-span {
  width: 100px;
  height: 100%;
  text-align: right;
  margin-right: 20px;
}

form {
  /*width: 32%;*/
  width: 500px;
  /*height: 100%;*/
  color: #888888;
  /*padding: 10px;*/
  font-size: 20px;
  /*background-color: #5AC2EE;*/
}

input {
  width: 70%;
  height: 35px;
  line-height: 35px;
  color: #606266;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 5px 5px;
  border-bottom: 1px #c2cad8 solid;
}

input:focus {
  border-bottom: 1px #5AC2EE solid;
}

textarea {
  width: 100%;
  resize: vertical;
  outline: none;
  font-size: 18px;
  margin-top: 15px;
  font-weight: 900;
  min-height: 100px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px #c2cad8 solid;
  background-color: transparent;
  background-size: cover;
  background-position: bottom;
  background-image: url("../assets/comment.png");
}

textarea:focus {
  border: 1px #5AC2EE solid;
}

button {
  cursor: pointer;
  line-height: 1;
  width: 100%;
  color: #fff;
  transition: .1s;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #5AC2EE;
  background-color: #5AC2EE;
}

button:hover {
  background-color: #7acaea;
}
</style>