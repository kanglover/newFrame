export default {
  state: {
    tabs: [],
    activeIndex: ''
  },
  mutations: {
    add_tabs (state, data) {
      this.state.tabs.push(data)
    },
    delete_tabs (state, route) {
      let index = 0
      for (let tab of state.tabs) {
        if (tab.route === route) {
          break
        }
        index++
      }
      this.state.options.splice(index, 1)
    },
    set_active_index (state, index) {
      this.state.activeIndex = index
    }
  }
}
