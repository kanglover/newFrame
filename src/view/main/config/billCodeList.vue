<template>
  <div class="row">
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
          <span class="titleLabel">
                    <a class="btn"> <i
                      class='glyphicon el-icon-circle-plus'></i>
            新增
                  </a>
          </span>

        <span class="titleLabel">
           <a class="btn" > <i
             class='glyphicon el-icon-refresh'></i>
          刷新
           </a>
        </span>

      </div>
    </div>
    <el-main>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-main>
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
  .el-icon-circle-plus,.el-icon-refresh{
    color: white;
  }
  .btn {
    /*margin: 0 1px;*/
    /*background-color: #40b2d8;*/
    /*color: #ffffff;*/
    margin-left: 5px;
  }
  .titleLabel{
    margin: 0 1px;
    background-color: #40b2d8;
    color: #ffffff;
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: normal;
    line-height: 30px;
    -webkit-font-smoothing: antialiased;
    width: 5%;
    height: 30px;
    border-radius:5px;
  }
</style>
