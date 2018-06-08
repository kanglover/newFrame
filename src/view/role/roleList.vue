<template>
  <div class="RoleList">
    <el-button type="primary" @click="add()" icon="el-icon-circle-plus-outline">新增</el-button>
    <el-button type="primary">批量删除</el-button>
    <el-table ref="multipleTable" @selection-change="handleSelectionChange"
              :data="tableData" style="width: 100%;margin-top:10px">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column label="#" width="55">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="350">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            type="primary"
            @click="handleLook(scope.$index, scope.row)">查看</el-button>
          <el-button
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button
            type="success"
            @click="AssignPermissions(scope.$index, scope.row)">分配权限点</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import {getRoles} from '@/api/role'
import store from '@/store/store'
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        name: '王小虎'
      }],
      role: {}
    }
  },
  methods: {
    handleSelectionChange(val) {

    },
    handleEdit (index, row) {
      store.commit('changeRole', row)
      this.$router.push('roleEdit')
    },
    handleLook (index, row) {
      store.commit('changeRole', row)
      this.$router.push('roleDisplay')
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    add() {
      this.$router.push('roleAdd')
    }
  },
  created () {
    // this.tableData = getRoles()
  }
}
</script>

<style scoped>
  .RoleList {
    margin: 30px 50px;
  }
</style>
