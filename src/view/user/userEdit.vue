<template>
  <div class="UserForm">
    <el-form ref="form" :model="form" label-width="80px" style="margin: 20px auto;width: 80%;">
      <el-row>
        <el-col :span="12"><el-form-item label="序号">
          <el-input size="medium" v-model="form.id" clearable></el-input>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="姓名">
          <el-input size="medium" v-model="form.name" clearable></el-input>
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item label="联系电话">
          <el-input size="medium" v-model="form.tel" clearable></el-input>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="家庭住址">
          <el-input size="medium" v-model="form.address" clearable></el-input>
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item label="工号">
          <el-input size="medium" v-model="form.worknum" clearable></el-input>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="电子邮箱">
          <el-input size="medium" v-model="form.email" clearable></el-input>
        </el-form-item></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><el-form-item label="密码">
          <el-input size="medium" v-model="form.password" clearable></el-input>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="出生日期">
          <el-date-picker size="medium" type="date" placeholder="选择日期" v-model="form.birth"></el-date-picker>
        </el-form-item></el-col>
      </el-row>
      <el-row style="text-align: center;margin: 20px auto">
      <el-form-item>
        <el-button type="primary" @click="submit">保存</el-button>
        <el-button type="primary" @click="back">返回</el-button>
      </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {update} from '@/api/user'
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
      },
      btShow: true
    }
  },
  methods: {
    submit() {
      update(this.form)
    },
    back() {
      this.$router.go(-1)
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
  .UserForm {
    margin: 50px 150px;
  }
  .el-form-item {
    height: 50px;
    width: 80%;
  }

</style>
