import { loginByUsername, logout, getUserInfo, getArea, getButton } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { delMenuClildren } from '@/utils/index'

import store from '../../store'
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    menu: [],
    buttonshow: [],
    area: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
    },
    SET_BUTTONSHOW: (state, buttonshow) => {
      state.buttonshow = buttonshow
    },
    SET_AREA: (state, area) => {
      state.area = area
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
            commit('SET_NAME', response.data.data.user.name)
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
      //   commit('SET_NAME', localStorage.getItem('name'))
      // } else {
      //   return new Promise((resolve, reject) => {
      //     getUserInfo().then(response => {
      //       const data = response.data
      //       sessionStorage.setItem('menu', JSON.stringify(data.data))
      //       commit('SET_MENU', data.data)
      //       commit('SET_NAME', localStorage.getItem('name'))
      //       resolve(response)
      //     }).catch(error => {
      //       reject(error)
      //     })
      //   })
      // }
      var arr = [
        {
          id: '1',
          name: '测试',
          icon:'tech',
          subMenus: [
            {
              id: '12',
              name: '测试页',
              href: '/test/test'

            }
          ]
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
          commit('SET_ROLES', [])
          commit('SET_MENU', [])
          removeToken()
          localStorage.removeItem('name')
          localStorage.removeItem('dataScope')
          localStorage.removeItem('orgId')
          localStorage.removeItem('userId')
          localStorage.removeItem('scopeType')
          localStorage.removeItem('menu')
          localStorage.removeItem('station')
          localStorage.removeItem('btn')
          localStorage.removeItem('roleId')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }

    // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resolve()
    //   })
    // }
  }
}

export default user
