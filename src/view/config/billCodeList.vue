<template>
  <div class="row">
    <div class="col-md-12">
      <div class="btn-group formBtnGroup">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <a class="btn "> <i
          class='glyphicon glyphicon-plus-sign'></i>新增
        </a> <a class="btn" > <i
        class='glyphicon glyphicon-refresh'></i>刷新
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bill-code-list',
  data () {
    return {
      options: [{
        value: '10',
        label: '10'
      }, {
        value: '20',
        label: '20'
      }, {
        value: '50',
        label: '50'
      }, {
        value: '100',
        label: '100'
      }, {
        value: '500',
        label: '500'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
