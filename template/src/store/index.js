import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isCollapsed: false,
    path: '/',        // 保存当前页面的路由路径
    visitedViews: [], // 保存所有访问过的页面
    visitedViewName: ''   // 保存当前页面名称
  }
})

export default store
