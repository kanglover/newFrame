<template>
  <el-container>
    <el-container style="height: 100vh;">
      <el-aside class="nav">
        <sideBar :modules="modules" @addTab="onAddTab" ref="sideBar"></sideBar>
      </el-aside>
      <el-main class="content">
        <v-header @sideBarChange="onSideBarChange"></v-header>
        <dynamicTab ref="tab"></dynamicTab>
        <mainContent></mainContent>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import header from './components/header'
import sideBar from '@/components/sideBar/sideBar'
import dynamicTab from '@/components/dynamicTab/dynamicTab'
import mainContent from './components/mainContent'
import ElRow from 'element-ui/packages/row/src/row'
import { getModules } from '@/api/module'

export default {
  data: function () {
    return {
      modules: {}
    }
  },
  components: {
    ElRow,
    sideBar,
    mainContent,
    dynamicTab,
    'v-header': header
  },
  methods: {
    onAddTab (module) {
      this.$refs.tab.addTab(this.$route)
    },
    onSideBarChange () {
      this.$refs.sideBar.change()
    }
  },
  mounted () {
    getModules().then(data => {
      this.modules = data
    })
  }
}
</script>
<style lang="scss" scoped>
  .nav {
    width: inherit !important;
    height: 100%;
    background-color: #545c64;
    overflow-x: hidden;
  }
  .content {
    margin: 0px 10px 10px 10px;
    padding: 0px 0px;
    /*background-color: #f0f2f5;*/
    background-color: white;
    .main {
      height: 88vh;
      background: white;
      margin-top: 12px;
    }
  }

  .rightGroup {

  }
</style>
