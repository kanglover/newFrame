import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tabs from './modules/tabs/tabs'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    tabs
  }
})

export default store
