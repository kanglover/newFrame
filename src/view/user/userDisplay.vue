<template>
  <div class="UserDisplay">
    <el-form label-width="80px" style="margin: 20px auto;width: 80%;">
      <el-row>
        <el-col :span="12"><el-form-item label="序号">
          <span>{{ form.id }}</span>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="姓名">
          <span>{{ form.name }}</span>
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item label="联系电话">
          <span>{{ form.tel }}</span>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="家庭住址">
          <span>{{ form.address }}</span>
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item label="工号">
          <span>{{ form.worknum }}</span>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="电子邮箱">
          <span>{{ form.email }}</span>
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item label="密码">
          <span>{{ form.password }}</span>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="出生日期">
          <span>{{ form.birth }}</span>
        </el-form-item></el-col>
      </el-row>
      <el-row style="margin: 20px 15px;">
      <el-form-item>
        <el-button type="primary" size="large" @click="back">返回</el-button>
      </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  data() {
    return {
      form: {
        id: '',
        name: '',
        tel: '',
        address: '',
        worknum: '',
        email: '',
        password: '',
        birth: ''
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
      this.form = ''
    }
  },
  created () {
    this.form = store.state.user
  },
  updated () {
    this.form = store.state.user
  }
}
</script>

<style scoped>
  .UserDisplay {
    margin: 50px 150px;
  }
  .el-form-item {
    height: 50px;
    width: 80%;
  }
  span {
      margin-left: 20px;
  }
</style>
