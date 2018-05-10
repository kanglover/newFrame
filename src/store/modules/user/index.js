import Vue from 'vue'
// import { LOGIN_IN, LOGIN_OUT } from '../../mutations'
// import { login, searchOrganization } from '@/api/login'

const LOGIN_USER = 'currentLoginUser'
const LOGIN_CODE = 'operatorCode'
const LOGIN_ROLE = 'roles'
const LOGIN_ORG = 'selectedOrg'

export default {
  state: {
    currentLoginUser: JSON.parse(sessionStorage.getItem(LOGIN_USER)),
    operatorCode: JSON.parse(sessionStorage.getItem(LOGIN_CODE)),
    roles: JSON.parse(sessionStorage.getItem(LOGIN_ROLE)),
    selectedOrg: JSON.parse(sessionStorage.getItem(LOGIN_ORG))
  },
  mutations: {
    LOGIN_IN: (state, params) => {
      let roles = []
      params.user.loginUser.loginOperator.operatorAndRoles
        .every((cur, index) => {
          roles.push({ code: cur.role.code, name: cur.role.name })
        })
      Vue.set(state, 'currentLoginUser', JSON.stringify(params.user.loginUser.loginOperator))
      Vue.set(state, 'operatorCode', JSON.stringify(params.user.loginUser.loginOperator.code))
      Vue.set(state, 'roles', JSON.stringify(roles))
      Vue.set(state, 'selectedOrg', JSON.stringify(params.org))
      window.sessionStorage.setItem(LOGIN_USER, JSON.stringify(params.user.loginUser.loginOperator))
      window.sessionStorage.setItem(LOGIN_CODE, JSON.stringify(params.user.loginUser.loginOperator.code))
      window.sessionStorage.setItem(LOGIN_ROLE, JSON.stringify(roles))
      window.sessionStorage.setItem(LOGIN_ORG, JSON.stringify(params.org))
    },
    LOGIN_OUT: (state) => {
      Vue.set(state, 'currentLoginUser', null)
      Vue.set(state, 'operatorCode', null)
      Vue.set(state, 'roles', null)
      Vue.set(state, 'selectedOrg', null)
      window.sessionStorage.removeItem(LOGIN_USER)
      window.sessionStorage.removeItem(LOGIN_CODE)
      window.sessionStorage.removeItem(LOGIN_ROLE)
      window.sessionStorage.removeItem(LOGIN_ORG)
    }
  },
  actions: {
    loginInSubmit ({commit}, params) {
      /* login(params.operatorCode, params.operatorPassword, params.organization)
        .then(user => {
          if (user.isLogin === true) {
            searchOrganization(params.operatorCode)
              .then(org => {
                if (org != null) {
                  commit(LOGIN_IN, {user, org})
                }
              })
          } else {
            //            提示用户密码错误
          }
        }) */
    },
    loginOutSubmit ({commit}) {
      // commit(LOGIN_OUT)
    }
  }
}
