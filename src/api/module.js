import {get} from '@/util/fetch'
// 获取用户操作模块
export function getModules () {
  return get('modules', {})
}
