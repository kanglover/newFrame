<template>
  <el-container>
    <el-container style="height: 100vh;">
      <el-aside class="nav">
        <navMenu :modules="modules" @addTab="onAddTab()" ref="navMenu"></navMenu>
      </el-aside>
      <el-main class="content">
        <el-row>
          <el-header class="header">
            <i class="el-icon-d-arrow-right" @click="collapse($event)"></i>
            <div class="rightGroup">

            </div>
          </el-header>
        </el-row>
        <el-row class="main">
          <tab ref="tab"></tab>
        </el-row>
      </el-main>
      <!--<router-view></router-view>-->
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
      this.$refs.navMenu.change()
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

  .rightGroup {

  }
</style>
