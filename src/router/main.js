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
    path: '/user/userList',
    name: 'userList',
    component: () => import('../view/user/userList'),
    meta: {
      title: '用户管理',
      name: 'userList'
    }
  },
  {
    path: '/user/userAdd',
    name: 'userAdd',
    component: () => import('../view/user/userAdd'),
    meta: {
      title: '新增用户',
      name: 'userAdd'
    }
  },
  {
    path: '/user/userDisplay',
    name: 'userDisplay',
    component: () => import('../view/user/userDisplay'),
    meta: {
      title: '查看用户',
      name: 'userDisplay'
    }
  },
  {
    path: '/user/userEdit',
    name: 'userEdit',
    component: () => import('../view/user/userEdit'),
    meta: {
      title: '修改用户',
      name: 'userEdit'
    }
  },
  {
    path: '/role/roleList',
    name: 'roleList',
    component: () => import('../view/role/roleList'),
    meta: {
      title: '角色管理',
      name: 'roleList'
    }
  },
  {
    path: '/role/roleAdd',
    name: 'roleAdd',
    component: () => import('../view/role/roleAdd'),
    meta: {
      title: '新增角色',
      name: 'roleAdd'
    }
  },
  {
    path: '/role/roleDisplay',
    name: 'roleDisplay',
    component: () => import('../view/role/roleDisplay'),
    meta: {
      title: '查看角色',
      name: 'roleDisplay'
    }
  },
  {
    path: '/role/roleEdit',
    name: 'roleEdit',
    component: () => import('../view/role/roleEdit'),
    meta: {
      title: '修改角色',
      name: 'roleEdit'
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
