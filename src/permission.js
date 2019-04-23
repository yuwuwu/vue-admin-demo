import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import {Button} from 'ant-design-vue';
import {
  getToken
} from '@/utils/auth' // 验权

const whiteList = ['/login', '/download'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
    } else {
      var arr = document.getElementsByClassName('liDom')
      for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove('is-active')
        if (arr[i].innerText === to.name) {
          arr[i].classList.add('is-active')
        }
      }
      if (store.getters.menu.length === 0) {
        store.dispatch('GetUserInfo').then(res => { // 拉取用户信息
          next()
        }).catch(() => {
          Message.error('验证失败,请重新登录')
          store.dispatch('LogOut').then(() => {
            next({
              path: '/login'
            })
            location.reload()
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      store.dispatch('LogOut').then(() => {
        next({
          path: '/login'
        })
      }).catch(() => {
        next({ path: '/login' })
      })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
