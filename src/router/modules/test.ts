import { RouteRecordRaw } from 'vue-router'

/** 关于我们页面的路由配置 */
const TestRouter: RouteRecordRaw = {
  path: '/test',
  name: 'test',
  component: () => import('@/views/Home.vue'),
}

export default TestRouter