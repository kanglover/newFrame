<template>
  <div class="row">
    <el-header>
      <div class="col-md-12">
        <div class="btn-group formBtnGroup">
          <el-select v-model="value" placeholder="请选择" class="grid-control">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary"><i
            class='glyphicon el-icon-circle-plus'></i>新增</el-button>
          <el-button type="primary"><i
            class='glyphicon el-icon-refresh'></i>刷新</el-button>
        </div>
        <div>
          <el-select v-model="value" placeholder="请选择" class="selectedValue">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入内容" class="inputValue"></el-input>
        </div>
      </div>
    </el-header>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="编码类型名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="编码规则"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="实体名称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="属性名称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="数据库表名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="变量">
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作">
        </el-table-column>
      </el-table>
    </el-main>
    <!--<el-footer>-->
      <!--<el-pagination-->
        <!--background-->
        <!--layout="prev, pager, next"-->
        <!--:total="10">-->
      <!--</el-pagination>-->
    <!--</el-footer>-->
  </div>
</template>

<script>
import addButton from '@/components/button/addButton'
import refreshButton from '@/components/button/refreshButton'
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
      value: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components: {
    addButton,
    refreshButton
  }
}
</script>

<style scoped>
  .grid-contral{
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }
  button{
    font-size: 15px;
  }
  .btn-group{
    width: 70%;
    float: left;
  }
  .selectedValue{
    width: 10%;
  }
  .inputValue{
    width: auto;
  }
</style>
