import Vue from 'vue'
import Router from 'vue-router'
import main from './main'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../view/login/login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../view/main/main.vue'),
      children: [
        ...main
      ]
    }
  ]
})
