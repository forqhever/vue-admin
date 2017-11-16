// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import service from './service'
import MyComponent from './components'
import './mock'

Vue.use(ElementUI)
Vue.use(MyComponent)
Vue.prototype.$http = service
Vue.config.productionTip = false

service.post('/login', {username: 'admin', password: 'admin1'})
  .then(res => {
    console.log(res)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
