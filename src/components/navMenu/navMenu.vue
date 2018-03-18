<template>
  <div>
    <el-menu default-active="1-4-1" @open="handleOpen" class="el-menu-vertical-demo" @close="handleClose" :collapse="isCollapse"
             active-text-color="#ffd04b"  text-color="#fff"  background-color="#545c64">
      <div class="el-menu-item is-active expand" @click="change">
        <i class="el-icon-d-caret"></i>
      </div>

    <el-submenu index="0">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">组织机构管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="0-1">单位管理</el-menu-item>
        <el-menu-item index="0-2">职员管理</el-menu-item>
        <el-menu-item index="0-2">部门管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-view"></i>
        <span slot="title">视图管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    change () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .expand {
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
  }
</style>
