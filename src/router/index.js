import Vue from 'vue'
import Router from 'vue-router'
import main from './main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../view/login/login.vue')
    },
    {
      path: '/',
      component: () => import('../view/main/main.vue'),
      child: [
        ...main
      ]
    }
  ]
})
