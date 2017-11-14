import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import store from '../store'

Vue.use(Vuex)

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

console.log(service.interceptors.request)

// request拦截器
service.interceptors.request.use(config => {
  console.log('request: ' + config.url)
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token
  }
  return config
}, error => {
  console.log('error: ' + error)
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  const data = response.data
  console.log('response: ' + response.data)
  const code = data ? data.code : 0
  // console.log('code: ' + code)
  // 50014:Token 过期了 50012:其他客户端登录了 50008:非法的token
  if (code === 50008 || code === 50014 || code === 50012) {
    // 重定向到登录页
  } else {
    return response
  }
}, error => {
  console.log('error: ' + error)
  return Promise.reject(error)
})

export default service
