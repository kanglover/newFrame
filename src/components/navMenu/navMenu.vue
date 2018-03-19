<template>
  <div>
    <el-menu default-active="0" @open="handleOpen" class="el-menu-vertical-demo" @close="handleClose" :collapse="isCollapse"
             active-text-color="#ffd04b"  text-color="#fff"  background-color="#545c64">
      <div class="el-menu-item is-active expand" @click="change">
        <i class="el-icon-d-caret"></i>
      </div>
    <el-submenu :index="''+submenuIndex" v-for="(module, submenuIndex) in modules.nodes" :key="module.id">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{module.text}}</span>
      </template>
      <el-submenu :index="submenuIndex+'_'+childIndex" v-for="(childModule, childIndex) in module.nodes" :key="childModule.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{childModule.text}}</span>
        </template>
        <el-menu-item :index="submenuIndex+'_'+childIndex+'_'+nodeIndex" v-for="(childNode, nodeIndex) in childModule.nodes" :key="childNode.id">{{childNode.text}}</el-menu-item>
      </el-submenu>
    </el-submenu>
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
  props: ['modules'],
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
