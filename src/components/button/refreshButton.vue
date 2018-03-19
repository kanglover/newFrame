<template>
 <span class="titleLabel">
           <a class="btn" > <i
             class='glyphicon el-icon-refresh'></i>
          刷新
           </a>
        </span>
</template>

<script>
export default {
  name: 'refresh-button'
}
</script>

<style scoped>
  .el-icon-refresh{
    color: white;
  }
  .btn {
    margin-left: 5px;
  }
  .titleLabel{
    margin: 0 1px;
    background-color: #40b2d8;
    color: #ffffff;
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    -webkit-font-smoothing: antialiased;
    width: 5%;
    height: 30px;
    border-radius:5px;
  }
</style>
