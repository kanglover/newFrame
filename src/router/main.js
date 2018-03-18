export default [
  {
    path: '/',
    component: () => import('../view/main/main')
  },
  {
    path: '/main',
    name: '首页',
    component: () => import('../view/main/main')
  }
]

// 待配置路由拦截
