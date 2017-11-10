<template>
  <el-container class="container">

    <el-form class="login-form" autoComplete="on" :model="loginForm">
      <div class="title">系统登录</div>

      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username"
                  autoComplete="on" placeholder="邮箱" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input name="password" :type="passType" v-model="loginForm.password"
                  autoComplete="on" placeholder="密码" />
      </el-form-item>

      <el-button type="primary" class="btn" :loading="loading" @click="onLogin">登录</el-button>
      <el-button type="primary" class="btn" @click="onPassChange">CAS登录</el-button>

    </el-form>
  </el-container>
</template>

<script>
  import ElCard from '../../../node_modules/element-ui/packages/card/src/main.vue'
  import ElContainer from '../../../node_modules/element-ui/packages/container/src/main.vue'

  export default {
    components: {
      ElContainer,
      ElCard},
    name: 'login',
    data () {
      return {
        loginForm: {
          username: 'admin',
          password: '123'
        },
        loading: false,
        showDialog: false,
        passType: 'password'
      }
    },
    methods: {
      onLogin () {
        localStorage.setItem('token', this.loginForm.username)
        localStorage.setItem('username', this.loginForm.username)
        this.$router.push('/')
      },
      onPassChange () {
        if (this.passType === 'password') {
          this.passType = ''
        } else {
          this.passType = 'password'
        }
        this.loading = !this.loading
      }
    }
  }
</script>

<style lang="scss">
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .container {
    height: 100%;
    background-color: $bg;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      height: 50px;
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      color: $light_gray;
      height: 50px;
    }
    .el-input {
      display: inline-block;
      width: 85%;
    }

    .btn {
      width: 45%;
      &:first-child {
        float: left;
      }
      &:last-child {
        float: right;
      }
    }
  }
</style>
