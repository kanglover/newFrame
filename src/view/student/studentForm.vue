<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名" class="item">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄" class="item">
      <el-input v-model="form.age"></el-input>
    </el-form-item>
    <el-form-item label="身份证号" class="item">
      <el-input v-model="form.idCard"></el-input>
    </el-form-item>
    <el-form-item label="出生日期" class="item">
      <el-col :sapn="24">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item class="item">
      <el-button type="primary" @click="submit">保存</el-button>
      <el-button @click="back">返回</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {save} from '@/api/student'
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
      save(this.form)
    },
    back() {
      console.log('返回')
    }
  }
}
</script>
<style scoped>
.item {
  width: 30%;
  margin: 10px auto;
}
</style>
