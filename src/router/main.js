export default [
  {
    path: '/',
    component: () => import('../view/main/main')
  },
  {
    path: '/main',
    component: () => import('../view/main/main')
  }
]

// 待配置路由拦截
