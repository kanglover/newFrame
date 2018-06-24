import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  role: {},
  user: {}
}
const mutations = {
  changeRole(state, role) {
    state.role = role
  },
  changeUser(state, user) {
    state.user = user
  }
}
export default new Vuex.Store({
  state, mutations
})
