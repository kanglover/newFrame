<!--  stripe控制斑马线是否展示,true/false  -->
<!--  border控制边框是否展示,true/false  -->
<!--  height控制是否固定表头  -->
<!--  row-class-name为某些行添加样式,比如成功、警告等,应是一个方法,接收{row, rowIndex}参数  -->
<!--  fixed固定列,接收bool/left/right，表示左边或右边固定  -->
<!--  column.hasChildren用于判断是否还有子标题, 若有:children则包含column信息,最多支持3级  -->
<!--  highlight-current-row实现单选,然后由current-change触发事件(传入currentRow, oldCurrentRow)  -->
<!--  checkBox用于判断是否有多选框,selection_change用于绑定多选事件  -->
<!--  isOverflow用于判断一行的文字是否过多，如果多了就会用提示框,bool  -->
<!--  default_sort用于设置默认排序, 接收参数:{prop: 'xxx', order: 'descending'}  -->
<!--  isSortable用于判断一行是否要排序,bool、custom -->
<!--  sort_change用于当isSortable为custom时,向后台请求数据  -->
<!--  formatter用于格式化指定列的值,接收function(row, column)  -->
<!--  filters、filter-method开启列的筛选,filters格式为[{text: '', value: ''}, {text: '', value: ''}], filterHandler接收三个参数(value, row, column)  -->
<template>
  <el-table
    :data="data"
    :stripe="table_config.stripe ? true : false"
    :border="table_config.border ? true : false"
    :highlight-current-row="table_config.highlight_current_row  ? true : false"
    :height="table_config.height ? table_config.height : ''"
    :row-class-name="table_config.tableRowClassName ? table_config.tableRowClassName : ''"
    @current-change="table_config.current_change ? table_config.current_change : ''"
    @selection-change="table_config.selection_change ? table_config.selection_change : ''"
    @sort-change="table_config.sort_change ? table_config.sort_change : ''"
    :default-sort="table_config.default_sort"
    style="width: 100%">
    <el-table-column v-if="table_config.checkBox ? true : false" type="selection" width="55"></el-table-column>
    <el-table-column v-for="(column, index) in table_header"
                     :prop="column.name"
                     :label="column.label"
                     :fixed="column.fixed ? column.fixed : ''"
                     :width="column.width ? column.width : '180'"
                     :show-overflow-tooltip="column.isOverflow"
                     :sortable="column.isSortable"
                     :formatter="column.formatter"
                     :filters="column.filters"
                     :filter-method="column.filterHanlder"
                     :key="index">
      <template v-if="column.hasChildren">
        <el-table-column v-for="(column_2, index_2) in column.children"
                         :prop="column_2.name"
                         :label="column_2.label"
                         :fixed="column_2.fixed ? column_2.fixed : ''"
                         :width="column_2.width ? column_2.width : '180'"
                         :show-overflow-tooltip="column_2.isOverflow"
                         :sortable="column_2.isSortable"
                         :formatter="column_2.formatter"
                         :filters="column_2.filters"
                         :filter-method="column_2.filterHanlder"
                         :key="index_2">
          <template v-if="column2.hasChildren">
            <el-table-column v-for="(column_3, index_3) in column.children"
                             :prop="column_3.name"
                             :label="column_3.label"
                             :fixed="column_3.fixed ? column_3.fixed : ''"
                             :width="column_3.width ? column_3.width : '180'"
                             :show-overflow-tooltip="column_3.isOverflow"
                             :sortable="column_3.isSortable"
                             :formatter="column_3.formatter"
                             :filters="column_3.filters"
                             :filter-method="column_3.filterHanlder"
                             :key="index_3">
            </el-table-column>
          </template>
        </el-table-column>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: ['data', 'table_header', 'table_operat', 'table_config']
}
</script>
<style scoped lang="scss">

</style>
