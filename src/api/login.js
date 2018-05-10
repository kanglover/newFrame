import {post} from '@/util/fetch'
// 登录
export function login (operatorCode, operatorPassword, organization) {
  const data = {
    operatorCode,
    operatorPassword,
    organization
  }
  return post('/Login/checkLoginUser', data)
}

// 获取组织单位
export function searchOrganization (operatorCode) {
  const data = {
    operatorCode
  }
  return post('/Login/searchOrganization', data)
}
