<template>
  <el-container>
    <el-container style="height: 100vh;">
      <el-aside class="nav">
        <sideBar :modules="modules" @addTab="onAddTab()" ref="sideBar"></sideBar>
      </el-aside>
      <el-main class="content">
        <el-row>
          <el-header class="header">
            <i class="el-icon-d-arrow-right" @click="collapse($event)"></i>
            <div class="rightGroup">
            </div>
          </el-header>
        </el-row>
        <el-row class="mainContentBox">
          <dynamicNav class="dynamicNav"></dynamicNav>
          <mainContent class="mainContent"></mainContent>
        </el-row>
      </el-main>
      <!--<router-view></router-view>-->
    </el-container>
  </el-container>
</template>
<script>
import sideBar from '@/components/sideBar/sideBar'
import dynamicNav from '@/components/dynamicNav/dynamicNav'
import mainContent from './components/mainContent.vue'
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
    dynamicNav
  },
  methods: {
    onAddTab (module) {
      this.$refs.tab.addTab(module)
    },
    collapse (event) {
      if (event.target.className === 'el-icon-d-arrow-right') {
        event.target.className = 'el-icon-d-arrow-left'
      } else {
        event.target.className = 'el-icon-d-arrow-right'
      }
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
  }

  .header {
    background-color: #ffffff;
    color: black;
    padding-left: 0px;
    i {
      line-height: 60px;
      padding: 0px 20px;
    }
    i:hover {
      background: #dee0e2;
    }
  }

  .content {
    margin: 0px 10px 10px 10px;
    padding: 0px 0px;
    background-color: #f0f2f5;
    .main {
      height: 88vh;
      background: white;
      margin-top: 12px;
    }
  }

  .mainContentBox {
    margin-top: 1vh;
  }

  .dynamicNav {
    height: 4vh;
    background: red;
  }

  .mainContent {
    height: 85vh;
    background: yellow;
  }

  .rightGroup {

  }
</style>
