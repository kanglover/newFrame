export default [
  {
    path: '/',
    component: () => import('../view/main/main')
  },
  {
    path: '/main',
    component: () => import('../view/main/main')
  },
  {
    path: '/billCode/billCodeList',
    component: () => import('../view/configManagement/billCodeList')
  }
]

// 待配置路由拦截
