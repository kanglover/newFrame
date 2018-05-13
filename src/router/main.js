export default [
  {
    path: '/student/studentList',
    name: 'student',
    component: () => import('../view/student/studentList'),
    meta: {
      title: '学生管理'
    }
  },
  {
    path: '/teacher/teacherList',
    name: 'teacher',
    component: () => import('../view/teacher/teacherList'),
    meta: {
      title: '教师管理'
    }
  }
]

// 待配置路由拦截
