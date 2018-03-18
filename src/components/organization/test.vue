<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="主页" name="home">主页</el-tab-pane>
      <el-tab-pane label="业务管理" name="management">业务管理</el-tab-pane>
    </el-tabs>

    <div>
      <el-dropdown>
  <span class="el-dropdown-link">
    20<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>10</el-dropdown-item>
          <el-dropdown-item>20</el-dropdown-item>
          <el-dropdown-item>50</el-dropdown-item>
          <el-dropdown-item disabled>100</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button icon="el-icon-circle-plus-outline
">新增</el-button>
    </div>

    <el-table
      :data="tableData3"
      height="450"
      border
      style="width: 100%">
      <el-table-column
        prop="uid"
        label="编码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="supper"
        label="上级单位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="connectTelphone"
        label="联系电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作"
        width="180">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button >上一页</el-button>
      <el-button >下一页</el-button>
    </div>
      </div>
</template>
<script>export default {
  data () {
    return {
      tableData3: [{
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }, {
        uid: 1,
        name: '王小虎',
        supper: '单位',
        address: '上海市普陀区金沙江路 1518 ',
        connectTelphone: '13221232132',
        createTime: '2016-05-02',
        operate: '编辑  查看  删除'
      }
      ],
      currentRow: null
    }
  },
  methods: {
  }
}
</script>
