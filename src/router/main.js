export default [
  {
    path: '/student/studentList',
    name: 'studentList',
    component: () => import('../view/student/studentList'),
    meta: {
      title: '学生管理',
      name: 'studentList'
    }
  },
  {
    path: '/student/studentAdd',
    name: 'studentAddForm',
    component: () => import('../view/student/studentForm'),
    meta: {
      title: '新增学生',
      name: 'studentAddForm'
    }
  },
  {
    path: '/teacher/teacherList',
    name: 'teacherList',
    component: () => import('../view/teacher/teacherList'),
    meta: {
      title: '教师管理',
      name: 'teacherList'
    }
  },
  {
    path: '/formDesign/Addform',
    name: 'fromDesignForm',
    component: () => import('../view/formDesign/formDesign'),
    meta: {
      title: '表单设计',
      name: 'fromDesignForm'
    }
  }
]

// 待配置路由拦截
