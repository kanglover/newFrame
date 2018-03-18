export default [

  {
    path: '/main',
    component: () => import('../view/main/main')
  },
  {
    path: '/',
    component: () => import('../view/main/main')
  },
  {
    path: '/billCode/billCodeList',
    component: () => import('../view/config/billCodeList')
  }
]

// 待配置路由拦截
