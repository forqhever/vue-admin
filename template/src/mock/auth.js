const userMap = {
  admin: {
    username: 'admin',
    password: 'admin',
    role: ['admin'],
    token: 'admin',
    intro: '超级管理员'
  },
  guest: {
    username: 'guest',
    password: 'guest',
    role: ['guest'],
    token: 'guest',
    intro: '访客'
  }
}

export default {
  login: config => {
    const { username, password } = JSON.parse(config.body)
    const user = userMap[username]
    if (user && user.password === password) {
      return user
    }
    return null
  }
}
