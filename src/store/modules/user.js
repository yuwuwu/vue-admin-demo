import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { delMenuClildren } from '@/utils/index'

import store from '../../store'
const user = {
  state: {
    token: getToken(),
    name: 'test',
    menu: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
    }
  },

  actions: {
    // 登录
    LoginByUsername({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        var obj = {
          username: userInfo.username,
          password: userInfo.password
        }
        loginByUsername(obj).then(response => {
          if (response.data.code === 1) {
            setToken(response.data.data.JSESSIONID)
            resolve(response)
          } else {
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, userInfo }) {
      // if (JSON.parse(localStorage.getItem('menu'))) {
      //   commit('SET_MENU', JSON.parse(sessionStorage.getItem('menu')))
      // } else {
      //   return new Promise((resolve, reject) => {
      //     getUserInfo().then(response => {
      //       const data = response.data
      //       sessionStorage.setItem('menu', JSON.stringify(data.data))
      //       commit('SET_MENU', data.data)
      //       resolve(response)
      //     }).catch(error => {
      //       reject(error)
      //     })
      //   })
      // }
      //注释代码为请求后台时操作
      var arr = [
        {
          id: '1',
          name: 'test',
          icon: "clean",
          subMenus: [{ id: '1a', name: 'test', href: '/test/test' }]
        },
        {
          id: '2',
          name: 'test',
          icon: "tech",
          subMenus: [{ id: '2a', name: 'test', href: '/test/test' }]
        }
      ]
      commit('SET_MENU', arr)
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          store.state.app.visitedViews = []
          commit('SET_TOKEN', '')
          commit('SET_MENU', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
