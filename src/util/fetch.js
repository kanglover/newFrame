import qs from 'qs'
import { Message } from 'element-ui'
import axios from 'axios'
// import router from '../router'
const Axios = axios.create({
  baseURL: 'http://localhost:8090/DDD3/',
  timeout: 10000,
  responseType: 'json',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token
    }
    return config
  },
  error => {
    Message({
      showClose: true,
      message: error,
      type: 'error.data.error.message'
    })
    return Promise.reject(error.data.error.message)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  res => {
    if (res.data && res.data.success && !res.data.success) {
      Message({
        showClose: true,
        message: res.data.error.message.message
          ? res.data.error.message.message
          : res.data.error.message,
        type: 'error'
      })
      return Promise.reject(res.data.error.message)
    }
    return res
  },
  error => {
    console.log(error)
    /*
    if (!window.localStorage.getItem('loginUserBaseInfo')) {
      // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
      router.push({
        path: '/login'
      })
    } else {
      // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
      // 乖乖的返回去登录页重新登录
      let lifeTime = JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime * 1000
      let nowTime = new Date().getTime() // 当前时间的时间戳

      if (nowTime > lifeTime) {
        Message({
          showClose: true,
          message: '登录状态信息过期,请重新登录',
          type: 'error'
        })
        router.push({
          path: '/login'
        })
      } else {
        if (error.response.status === 403) {
          Message({
            showClose: true,
            message: error,
            type: 'error.data.error.message'
          })
        }
        if (error.response.status === 500) {
          Message({
            showClose: true,
            message: error,
            type: 'error.data.error.message'
          })
        }
        if (error.response.status === 502) {
          Message({
            showClose: true,
            message: error,
            type: 'error.data.error.message'
          })
        }
        if (error.response.status === 404) {
          Message({
            showClose: true,
            message: error,
            type: 'error.data.error.message'
          })
        }
      }
    }
    // 返回响应中的错误信息
    let errorInfo = error.data.error ? error.data.error.message : error.data
    return Promise.reject(errorInfo) */
  }
)

// get请求
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios.get(url, {
      params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// post请求
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    Axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
