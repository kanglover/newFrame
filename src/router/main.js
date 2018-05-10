export default [
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: () => import('../view/main/main')
  // },
  {
    path: '/student/studentList',
    name: 'student',
    component: () => import('../view/main/student/studentList')
  }
]

// 待配置路由拦截
