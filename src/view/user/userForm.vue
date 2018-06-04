<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="账号">
      <el-input v-model="form.id"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
    <el-form-item label="家庭住址">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="工号">
      <el-input v-model="form.worknum"></el-input>
    </el-form-item>
    <el-form-item label="电子邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.birth"></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">保存</el-button>
      <el-button @click="back">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
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
    submit() {
      console.log(this.form)
    },
    back() {
      console.log('返回')
    }
  }
}
</script>

<style scoped>

</style>
