import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import router from './router'
import VueRouter from "vue-router"

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
