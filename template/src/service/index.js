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
  return response
}, error => {
  console.log('error: ' + error)
  return Promise.reject(error)
})

export default service
