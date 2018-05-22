// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Element from 'element-ui'
import {get, post} from './util/fetch'

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.use(Element, { size: 'small' })

Vue.config.productionTip = false
router.afterEach((to, from) => {
  store.dispatch('addTab', {route: to})
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
