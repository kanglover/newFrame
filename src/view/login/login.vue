<template>
  <div class="login">
    <el-container>
      <el-header class="header"></el-header>
      <el-main class="main">
        <div class="loginBox el-col-lg-6 el-col-md-offset-14">
          <el-row class="head"></el-row>
          <el-row class="name">
            <h3>框架系统登录</h3>
          </el-row>
          <el-form ref="user" :model="user" label-width="80px">
            <el-from-item >
              <el-input v-model="user.name" placeholder="用户名" size="medium" style="padding-bottom: 5px;">
                <el-col slot="prefix" class="loginIcon icon-user"></el-col>
              </el-input>
            </el-from-item>
            <el-from-item>
              <el-input type="password" v-model="user.password" placeholder="密码" size="medium"  style="padding-bottom: 5px;">
                <el-col slot="prefix" class="loginIcon icon-password"></el-col>
              </el-input>
            </el-from-item>
            <el-row style="padding:7px 0 7px 0">
              <el-from-item>
                <el-checkbox label="记住密码" name="type"></el-checkbox>
                <a class="forget_password">忘记密码</a>
              </el-from-item>
            </el-row>
            <el-form-item>
              <el-button type="primary" @click="loginIn" style="width:100%;font-size: 18px;">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      user: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    loginIn: function () {
      this.$store.dispatch('loginInSubmit', {
        operatorCode: this.person.operatorCode,
        operatorPassword: this.person.operatorPassword,
        organization: {}
      })
    }
  }
}
</script>
<style>
  .login .el-input__inner{
    padding-left: 36px;
  }
  .login .el-form-item__content{
    margin-left: 0 !important;
  }
</style>

<style lang="scss" scoped>
  body{
    margin:0;
    padding:0;
  }
  .login{
    width:100%;
    height: 100%;
    .loginIcon{
      background-image: url("../../assets/images/loginImg/icon.png");
      width: 36px;
      height: 36px;
      position: absolute;
      z-index: 2;
    }

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
        .el-input__inner{
          padding-left:36px;
        }
        .icon-user{
          background-position: -5px -10px;
        }
        .icon-password{
          background-position: -5px -55px;
        }
        .forget_password{
          cursor: pointer;
          text-decoration: none;
          float: right;
          font-size: 14px;
          &:hover{
            color: #000;
          }
        }
        .input-group{
          width: 100%;
          padding-bottom: 5px;
          background-color: white;
          position: relative;
          display: table;
          border-collapse: separate;
          /*.icon-user{
           position: absolute;
           z-index: 2;
           background-position: -5px -10px;
          }*/
          /*input{
           padding-left: 36px;
           color: #ffffff;
            border-radius: 5px;
            border: none;
          }*/
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
