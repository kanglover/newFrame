<template>
  <el-container>
    <el-header style="height: 7vh;background-color: lightcyan">头</el-header>
    <el-container style="height: 93vh;">
      <el-aside class="nav">
        <navMenu :modules="modules"></navMenu>
      </el-aside>
      <el-main class="content">
        <el-row>
          <tab></tab>

        </el-row>
      </el-main>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script>
import navMenu from '@/components/navMenu/navMenu'
import tab from '@/components/tab/tab'
import ElRow from 'element-ui/packages/row/src/row'
import { getModules } from '@/api/api'

export default {
  data: function () {
    return {
      modules: {}
    }
  },
  components: {
    ElRow,
    navMenu,
    tab
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
  }

  .header {
    background-color: lightblue;
  }

  .content {
    margin: 10px 10px 10px 10px;
    padding: 0px 0px;
    background-color: white;
  }
</style>
