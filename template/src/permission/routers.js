const Auth = import('../views/auth/index.vue')

const authRouter = [
  {
    path: '/admin',
    component: Auth,
    name: '权限测试'
  }
]

export default authRouter
