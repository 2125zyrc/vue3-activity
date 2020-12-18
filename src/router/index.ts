import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

/** 自动加载其他路由模块 */
const files = require.context('./modules', true, /\.ts$/);

// const modules: Array<RouteRecordRaw> = []

const modules = files.keys().reduce((init: RouteRecordRaw[],key)=>{
  return init.concat(files(key).default)
}, [])

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...modules,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router