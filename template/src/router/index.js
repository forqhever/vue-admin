import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout'
import Tree from '../views/element/tree'
import Table from '../views/element/table'
import Form from '../views/element/form'
import Notice from '../views/element/notice'
import Index from '../views/index'
import Login from '../views/login'
import ImageView from '../views/custom/image_view'
import Error404 from '../views/error_page/404'
import Error401 from '../views/error_page/401'
import Settings from '../views/settings'
import Instruction from '../views/instruction'
import Binding from '../views/vue_base/binding'
import Lifecycle from '../views/vue_base/lifecycle'

import store from '../store'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: '首页',
          component: Index
        },
        {
          path: '/element/tree',
          name: '树形控件',
          component: Tree
        },
        {
          path: '/element/table',
          name: '表格',
          component: Table
        },
        {
          path: '/element/form',
          name: 'Form表单',
          component: Form
        },
        {
          path: '/element/notice',
          name: '提醒',
          component: Notice
        },
        {
          path: '/error_page/404',
          name: '404页面',
          component: Error404
        },
        {
          path: '/error_page/401',
          name: '401页面',
          component: Error401
        },
        {
          path: '/instruction',
          name: '使用说明',
          component: Instruction
        },
        {
          path: '/settings',
          name: '个人设置',
          component: Settings
        },
        {
          path: '/custom/image',
          name: '动画图片',
          component: ImageView
        },
        {
          path: '/vue/binding',
          name: 'vue双向绑定',
          component: Binding
        },
        {
          path: '/vue/lifecycle',
          name: 'vue生命周期',
          component: Lifecycle
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '*',
      redirect: '/error_page/404',
      hidden: true
    }
  ]
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
