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
  }
}
</script>
<style scoped>

</style>
