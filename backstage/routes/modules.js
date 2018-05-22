var express = require('express')
var router = express.Router()

var data = {
  name: 'modules',
  nodes: [{
    id: 1,
    name: '信息管理',
    nodes: [{
      id: 1.1,
      name: '学生管理',
      router: '/student/studentList'
    }, {
      id: 1.2,
      name: '教师管理',
      router: '/teacher/teacherList'
    }, {
      id: 1.3,
      name: '学校管理',
      nodes: [{
        id: '1.3.1',
        name: '财产管理'
      }, {
        id: '1.3.2',
        name: '教室管理'
      }]
    }]
  },
  {
    id: 2,
    name: '动态表单',
    nodes: [{
      id: 2.1,
      name: '表单管理',
      router: '/formDesign/Addform'
    }]
  }]
}

router.get('/', function (req, res) {
  res.end(JSON.stringify(data))
})

module.exports = router
