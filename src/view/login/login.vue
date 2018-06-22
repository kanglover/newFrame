<template>
  <div class="container demo-1" style="height: 100%;">
    <div class="content" style="height: 100%;">
      <div id="large-header" class="large-header" style="height: 100%;">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <h3>欢迎登录</h3>
          <form action="#" name="f" method="post">
            <div class="input_outer">
              <span class="u_user"></span>
              <input v-model="user.name" class="text" style="color: #FFFFFF !important" type="text" placeholder="请输入账户">
            </div>
            <div class="input_outer">
              <span class="us_uer"></span>
              <input v-model="user.password" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;" type="password" placeholder="请输入密码">
            </div>
            <div class="mb2" @click="loginIn"><a class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a></div>
          </form>
        </div>
      </div>
    </div>
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
        operatorCode: this.user.name,
        operatorPassword: this.user.password,
        organization: {}
      }).then(() => {
        this.$router.push({path: '/main'})
      })
    }
  }
}
</script>
<style scoped>
  @import './css/normalize.css';
  @import './css/demo.css';
  @import './css/component.css';
  input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    border: 1px solid #CCC!important;
  }

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
