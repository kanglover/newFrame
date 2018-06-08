import {get, post} from '@/util/fetch'

export function getRoles() {
  return get('role/findAll')
}

export function save(data) {
  return post('role/save', data)
}
