import Vue from 'vue'
import ElementUI from 'element-ui'
import Egrid from 'egrid'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/icons' // icon
import '@/permission' // 权限
import 'swiper/dist/css/swiper.css'// swiper

// axios.defaults.withCredentials = true
Vue.use(ElementUI)
Vue.use(Egrid)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
// Vue.config.devtools = false
Vue.prototype.$http = axios

// 按下标删除数组的对应元素
Array.prototype.del = function (dx) {
  if (isNaN(dx) || dx > this.length) { return false }
  this.splice(dx, 1)
}
// 指定元素从Array对象中删除
Array.prototype.remove = function (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}
// 确定指定对象是否是 Array 对象中的元素
Array.prototype.contains = function (obj) {
  var i = this.length
  while (i--) {
    if (this[i] === obj) {
      return true
    }
  }
  return false
}
// 数组去重
Array.prototype.unique = function () {
  var res = [this[0]]
  for (var i = 1; i < this.length; i++) {
    var repeat = false
    for (var j = 0; j < res.length; j++) {
      if (this[i] === res[j]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      res.push(this[i])
    }
  }
  return res
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
