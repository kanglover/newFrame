<template>
  <div  style="height: 100%;">
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab"  style="height: 100% !important;">
      <el-tab-pane
        v-for="(item) in editableTabs2"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        style="height: 100% !important;"
      >
      <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props: [],
  data () {
    return {
      editableTabsValue2: '2',
      editableTabs2: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content dddddddddd'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content  aaaaaaa'
      }],
      tabIndex: 2
    }
  },
  methods: {
    addTab (module) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab (targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>
