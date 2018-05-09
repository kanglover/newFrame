export default [
  {
    path: '/main',
    name: '首页',
    component: () => import('../view/main/main')
  },
  {
    path: '/billCode/billCodeList',
    component: () => import('../view/main/config/billCodeList')
  },
  {
    path: '/student/studentList',
    component: () => import('../view/main/student/studentList')
  }
]

// 待配置路由拦截
