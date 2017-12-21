import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isCollapsed: false,
    path: '/',        // 保存当前页面的路由路径
    visitedViews: [{name: '首页', path: '/', closable: false}], // 保存所有访问过的页面,默认有首页且不能关闭
    visitedViewName: ''   // 保存当前页面名称
  },
  mutations: {
    setPath (state, path) {
      state.path = path
    },
    addVisitedViews (state, view) {
      state.visitedViews.push(view)
    },
    setVisitedViews (state, views) {
      state.visitedViews = views
    },
    setVisitedViewName (state, name) {
      state.visitedViewName = name
    }
  },
  actions: {
    setPath ({commit}, path) {
      commit('setPath', path)
    },
    addVisitedViews ({commit}, view) {
      commit('addVisitedViews', view)
    },
    setVisitedViews ({commit}, views) {
      commit('setVisitedViews', views)
    },
    setVisitedViewName ({commit}, name) {
      commit('setVisitedViewName', name)
    }
  }
})

export default store
