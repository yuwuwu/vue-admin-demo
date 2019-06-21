import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'// 轮播组件，不需要可以注释并卸载
import '@/icons' // icon
import '@/permission' // 权限
import 'swiper/dist/css/swiper.css'// swiper

axios.defaults.withCredentials = true
Vue.use(ElementUI)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
