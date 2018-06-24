<template>
  <div class="UserList">
    <el-button type="primary" @click="add()" icon="el-icon-circle-plus-outline">新增</el-button>
    <el-button type="primary">批量删除</el-button>
    <el-table ref="multipleTable" @selection-change="handleSelectionChange" tooltip-effect="dark"
      :data="tableData" style="width: 100%;margin-top:10px">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column label="序号" width="55">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="联系电话">
        <template slot-scope="scope">
          <span>{{ scope.row.tel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="家庭住址">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="工号">
        <template slot-scope="scope">
          <span>{{ scope.row.worknum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="工号">
        <template slot-scope="scope">
          <span>{{ scope.row.worknum }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电子邮箱">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="密码">
        <template slot-scope="scope">
          <span>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="出生日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.birth }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            type="primary"
            @click="handleLook(scope.$index, scope.row)">查看</el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import {getUsers} from '@/api/user'
import store from '@/store/store'
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        name: '王小虎',
        tel: '17789874545',
        address: '上海市普陀区金沙江路 1517 弄',
        worknum: '11223366554',
        email: '9853651@qq.com',
        password: '.......',
        birth: '2016-05-02'
      }]
    }
  },
  methods: {
    handleSelectionChange(val) {

    },
    handleEdit (index, row) {
      console.log(index, row)
      store.commit('changeUser', row)
      this.$router.push('userEdit')
    },
    handleLook (index, row) {
      console.log(index, row)
      store.commit('changeUser', row)
      this.$router.push('userDisplay')
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    add() {
      this.$router.push('userAdd')
    }
  },
  created () {
    // this.tableData = getUsers()
  }
}
</script>

<style scoped>
  .UserList {
    margin: 30px 50px;
  }
</style>
