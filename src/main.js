import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import {router} from './router'
import store from "@/store";
import VueRouter from "vue-router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
