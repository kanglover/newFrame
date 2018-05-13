<template>
  <el-header class="header">
    <i class="el-icon-d-arrow-right" @click="collapse($event)"></i>
    <div class="rightGroup">
      <i class="el-icon-rank"></i>
      <i class="el-icon-question"></i>
      <i class="el-icon-bell"></i>
      <span>admin</span>
    </div>
  </el-header>
</template>
<script>
export default {
  methods: {
    collapse (event) {
      if (event.target.className === 'el-icon-d-arrow-right') {
        event.target.className = 'el-icon-d-arrow-left'
      } else {
        event.target.className = 'el-icon-d-arrow-right'
      }
      this.$emit('sideBarChange')
    }
  }
}
</script>
<style scoped lang="scss">
  .rightGroup {
    display: inline-block;
    float: right;
  }

  .header {
    background-color: #ffffff;
    color: black;
    border-bottom:1px solid #e6e6e6;
    padding-left: 0px;
    i {
      line-height: 60px;
      padding: 0px 20px;
      font-size: 18px;
    }
    i:hover {
      background: #dee0e2;
    }
  }
</style>
