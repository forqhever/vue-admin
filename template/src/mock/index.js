import Mock from 'mockjs'
import auth from './auth'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/test/, 'get', () => 'test success!')
Mock.mock(/\/login/, 'post', auth.login)

export default Mock
