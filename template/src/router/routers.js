// 路由懒加载
const Layout = () => import(/* webpackChunkName: "group-layout" */'@/views/layout/index.vue')
const Index = () => import(/* webpackChunkName: "group-layout" */'@/views/index/index.vue')
const Login = () => import(/* webpackChunkName: "group-layout" */'@/views/login/index.vue')
const ImageView = () => import(/* webpackChunkName: "group-layout" */'@/views/custom/image_view.vue')
const Error404 = () => import(/* webpackChunkName: "group-error" */'@/views/error_page/404.vue')
const Error401 = () => import(/* webpackChunkName: "group-error" */'@/views/error_page/401.vue')
const Settings = () => import(/* webpackChunkName: "group-layout" */'@/views/settings/index.vue')
const Instruction = () => import(/* webpackChunkName: "group-layout" */'@/views/instruction/index.vue')
const Binding = () => import(/* webpackChunkName: "group-layout" */'@/views/vue_base/binding.vue')
const Lifecycle = () => import(/* webpackChunkName: "group-layout" */'@/views/vue_base/lifecycle.vue')
const Tree = () => import(/* webpackChunkName: "group-vue" */'@/views/element/tree.vue')
const Table = () => import(/* webpackChunkName: "group-vue" */'@/views/element/table.vue')
const Form = () => import(/* webpackChunkName: "group-vue" */'@/views/element/form.vue')
const Notice = () => import(/* webpackChunkName: "group-vue" */'@/views/element/notice.vue')
const Ajax = () => import(/* webpackChunkName: "group-vue" */'@/views/ajax/index.vue')

const constRouters = [
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
      },
      {
        path: '/ajax',
        name: 'ajax请求示例',
        component: Ajax
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

export default constRouters
