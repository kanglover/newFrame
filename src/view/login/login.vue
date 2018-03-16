<template>
  <div class="login">
    <el-container>
      <el-header class="header"></el-header>
      <el-main class="main">
        <div class="loginBox el-col-lg-6 el-col-md-offset-14">
          <div class="head"></div>
          <div class="name">
            <h3>框架系统登录</h3>
          </div>
          <from>
            <div>
              <div>
                <div></div>
                <div></div>
                <button></button>
              </div>
              <div></div>
            </div>
          </from>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
  body{
    margin:0;
    padding:0;
  }
  .login{
    width:100%;
    height: 100%;
    .header{
      background:url("../../assets/images/loginImg/loginHead.png") no-repeat;
      width: 100%;
      height: 100px !important;
      position: absolute;
      margin-left: -8px;
      padding:0;
      top:0;
    }
    .main{
      background:url("../../assets/images/loginImg/loginbackground.png") no-repeat center;
      height: 400px;
      color: #40b2d8;
      background-size: cover;
      position: absolute;
      width: 100%;
      top:50%;
      padding:0;
      margin-top: -200px;
      margin-left: -8px;
      margin-right: -8px;
      .loginBox{
        border-radius: 6px;
        height: 250px;
        position: absolute;
        top:50%;
        margin-top:-125px;
        background-color: #fff;
        padding: 0px 15px 0px 15px;
        .head{
          height: 15px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          background-color: #40b2d8;
          color: white;
          text-align: center;
          margin-right: -15px;
          margin-left: -15px;
        }
        .name{
          text-align: center;
          margin-right: -15px;
          margin-left:-15px;
          h3{
            font-family: inherit;
            font-weight: 500;
            line-height: 1.1;
            color: inherit;
            font-size:24px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-right: -15px;
            margin-left:-15px;
          }
        }
      }
    }
  }
</style>
