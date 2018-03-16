<template>
  <el-container>
    <el-header style="height: 7vh;background-color: lightcyan">头</el-header>
    <el-container style="height: 93vh;">
      <el-aside class="nav">
        <navMenu></navMenu>
      </el-aside>
      <el-main class="content">
        <el-row style="height: 100%;"><tab></tab></el-row>
        <!--<el-row>主体</el-row>-->
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import navMenu from '@/components/navMenu/navMenu'
import tab from '@/components/tab/tab'
import ElRow from 'element-ui/packages/row/src/row'
export default {
  components: {
    ElRow,
    navMenu,
    tab
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
    margin: 30px 10px 10px 10px;
    padding: 0px 0px;
    background-color: white;
  }
</style>
