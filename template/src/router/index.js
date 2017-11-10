import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout'
import Tree from '../views/element/tree'
import Table from '../views/element/table'
import Intro from '../views/intro'
import Login from '../views/login'
import Error404 from '../views/error_page/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout,
      children: [
        {
          path: '/',
          name: '介绍',
          component: Intro
        },
        {
          path: '/element/tree',
          name: '树形控件',
          component: Tree
        },
        {
          path: '/element/table',
          name: 'table',
          component: Table
        },
        {
          path: '/error_page/404',
          name: '错误页面',
          component: Error404
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})
