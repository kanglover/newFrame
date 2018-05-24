import {get, post} from '@/util/fetch'

export function getStudents() {
  return get('student/getAll')
}

export function save(data) {
  return post('student/save', data)
}
