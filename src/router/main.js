export default [

  {
    path: '/main',
    component: () => import('../view/main/main')
  },
  {
    path: '/main',
    name: '首页',
    component: () => import('../view/main/main')
  },
  {
    path: '/billCode/billCodeList',
    component: () => import('../view/main/config/billCodeList')
  }
]

// 待配置路由拦截
