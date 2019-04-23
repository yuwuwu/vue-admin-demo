import axios from 'axios'
import router from '../router'
import store from '../store'
// import { Message } from '_ant-design-vue@1.3.8@ant-design-vue';
// import Antd from '_ant-design-vue@1.3.8@ant-design-vue';
import { Message } from 'ant-design-vue'
// 创建axios实例
const instance = axios.create({
  // baseURL: 'http://10.16.70.139:8800/', // api的base_url
  timeout: 15000,                 // 请求超时时间
  headers: { 'content-type': 'application/json;charset=UTF-8' }
})
var arr = []
// 拦截请求
// instance.interceptors.request.use(config => {
//   // console.log(config,'请求')
//   // for (var i in config.data) {
//   //   console.log(config.data[i], '拦截之前----------------')
//   //   // config.data[i] = encodeURI(config.data[i])
//   //   console.log(config.data[i], '拦截之后----------------')
//   // }
//   return config
// }, error => {
//   console.log(error)
//   return Promise.reject(error)
// })

// 拦截响应
instance.interceptors.response.use(res => {
  if (res.data.code !== undefined) {
    if(res.data.code==1){
      Message.error('登录已过期或者个人资料被更改,请重新登录,3秒后回到登录页面')
    }
    if (res.data.code === 2) {
      arr.push(res.data.code)
      if (arr.length === 1) {
        store.dispatch('LogOut').then(() => {
          Message.error('登录已过期或者个人资料被更改,请重新登录,3秒后回到登录页面')
          setTimeout(() => {
            arr = []
            router.push({ path: '/login' })
            location.reload()
          }, 1100)
        })
      }
      setTimeout(() => {
        arr = []
      }, 3000)
    }
    if (res.data.code === 0) {
      if (typeof res.data.data === 'string') {
        Message.error(res.data.data)
      } else {
        Message.error(res.data.data[0])
      }
    }
  }

  return res
}, error => {
  if (error.response) {
    const num = error.response.status
    if ([501, 502, 503, 504, 404].indexOf(num) > -1) {
      arr.push(num)
      if (arr.length === 1) {
        Message.error('服务器断开！' + num + '错误！')
      }
      setTimeout(() => {
        arr = []
      }, 1100)
    }
  }
  return Promise.reject(error)
})

export default instance
