<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="form.age"></el-input>
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
        name: '',
        age: '',
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
