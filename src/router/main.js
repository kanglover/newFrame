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
    path: '/user/userList',
    name: 'user',
    component: () => import('../view/user/userList'),
    meta: {
      title: '用户管理'
    }
  },
  {
    path: '/user/userAdd',
    name: 'userAdd',
    component: () => import('../view/user/userAdd'),
    meta: {
      title: '新增用户'
    }
  },
  {
    path: '/user/userDisplay',
    name: 'userDisplay',
    component: () => import('../view/user/userDisplay'),
    meta: {
      title: '查看用户'
    }
  },
  {
    path: '/user/userEdit',
    name: 'userEdit',
    component: () => import('../view/user/userEdit'),
    meta: {
      title: '修改用户'
    }
  },
  {
    path: '/role/roleList',
    name: 'role',
    component: () => import('../view/role/roleList'),
    meta: {
      title: '角色管理'
    }
  },
  {
    path: '/role/roleAdd',
    name: 'roleAdd',
    component: () => import('../view/role/roleAdd'),
    meta: {
      title: '新增角色'
    }
  },
  {
    path: '/role/roleDisplay',
    name: 'roleDisplay',
    component: () => import('../view/role/roleDisplay'),
    meta: {
      title: '查看角色'
    }
  },
  {
    path: '/role/roleEdit',
    name: 'roleEdit',
    component: () => import('../view/role/roleEdit'),
    meta: {
      title: '修改角色'
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
