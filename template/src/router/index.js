import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import constRouters from './routers.js'

Vue.use(Router)

const router = new Router({
  routes: constRouters
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token') || to.path === '/login') {
    store.state.path = to.path
    if (to.path !== '/login') {
      store.state.visitedViewName = to.name
      let visitedViews = store.state.visitedViews
      let exists = false
      for (let i = 0; i < visitedViews.length; i++) {
        let view = visitedViews[i]
        if (view.name === to.name) {
          exists = true
          break
        }
      }
      if (!exists) {
        store.state.visitedViews.push({
          name: to.name,
          path: to.path,
          closable: to.path !== '/'
        })
      }
    }
    next()
  } else {
    next('/login')
  }
})

export default router
