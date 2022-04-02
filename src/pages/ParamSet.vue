<template>
  <div id="param-set">
    <ContentHeader :text="text"/>
    <div class="param-set-content">
      <form class="flex" @submit="save">
        <div class="form-item">
          <span class="form-span">办证费(元)</span>
          <input type="number" required v-model="parameter.cost"/>
        </div>
        <div class="form-item">
          <span class="form-span">有效期限(月)</span>
          <input type="number" required v-model="parameter.validity"/>
        </div>
        <button>保存</button>
      </form>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader";
import axios from "axios";

export default {
  name: "ParamSet",
  components: {ContentHeader},
  created() {
    axios.get('http://localhost:8081/BookManagerSystem/parameter/1')
        .then(({data}) => {
          this.parameter = data.result
        })
  },
  data() {
    return {
      text: '参数设置',
      parameter: {
        id: null,
        cost: null,
        validity: null
      }
    }
  },
  methods: {
    save(e) {
      let parameter = this.parameter
      axios.put('http://localhost:8081/BookManagerSystem/parameter', {
        ...parameter
      }).then(({data}) => {
        console.log(data)
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
#param-set {
  color: #838FA1;
  font-size: 20px;
}

.param-set-content {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.form-item {
  width: 100%;
  padding: 15px 0 15px 0;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-span {
  width: 160px;
  height: 100%;
  text-align: right;
  margin-right: 20px;
}

input {
  outline: none;
  padding: 10px;
  width: 250px;
  color: #606266;
  font-size: 18px;
  transition: .35s;
  border-radius: 4px;
  border: 2px #C2C2C2 solid;
}

input:hover {
  border: 2px #606266 solid;
}

input:focus {
  border: 2px #5AC2EE solid;
}

button {
  cursor: pointer;
  line-height: 1;
  /*width: 100%;*/
  color: #fff;
  margin: 0 auto;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

input {
  -moz-appearance: textfield;
}
</style>