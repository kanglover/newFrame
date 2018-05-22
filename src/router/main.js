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
    path: '/student/studentAdd',
    name: 'studentAdd',
    component: () => import('../view/student/studentForm'),
    meta: {
      title: '新增学生'
    }
  },
  {
    path: '/teacher/teacherList',
    name: 'teacher',
    component: () => import('../view/teacher/teacherList'),
    meta: {
      title: '教师管理'
    }
  },
  {
    path: '/formDesign/Addform',
    name: 'formDesign',
    component: () => import('../view/formDesign/formDesign'),
    meta: {
      title: '表单设计'
    }
  }
]

// 待配置路由拦截
