<template>
  <div class="roleDisplay">
    <el-form label-width="80px" style="margin: 20px auto;width: 80%;">
      <el-row>
        <el-col :span="12"><el-form-item label="ID">
          <span>{{ form.id }}</span>
        </el-form-item></el-col>
        <el-col :span="12"><el-form-item label="姓名">
          <span>{{ form.name }}</span>
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
        name: ''
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
    this.form = store.state.role
  },
  updated () {
    this.form = store.state.role
  }
}
</script>

<style scoped>
  .roleDisplay {
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
