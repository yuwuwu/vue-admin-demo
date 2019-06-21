import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: _import('login/index') },
  { path: '/404', component: _import('404') },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/test',
    component: Layout,
    name: '测试页面1',
    children: [
      { path: 'test', meta: { isUseCache: true, keepAlive: false, keepNum: 1 }, name: '测试页面2', component: _import('test/test') }
    ]
  },
  {
    path: '/index',
    component: Layout,
    name: '测试页面2',
    children: [
      { path: 'index', meta: { isUseCache: true, keepAlive: false, keepNum: 1 }, name: '测试页面2', component: _import('index/index') }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: (to, from, savedPosition) => {
    savedPosition = document.body.scrollTop
    // return { x: 0, y: 0 }
  },
  // base: '/ttms/',
  routes: constantRouterMap
})

