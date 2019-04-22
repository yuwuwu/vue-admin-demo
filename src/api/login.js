import instance from '@/utils/fetch'

export function loginByUsername(obj) {
  return instance.post(`/apiservice/a/login`, obj)
}

export function logout() {  // 退出
  return instance.post(`/apiservice/a/logout`)
}

export function getUserInfo() { // 侧边栏
  return instance.get(`/apiservice/a/sys/user/menuData`)
}


