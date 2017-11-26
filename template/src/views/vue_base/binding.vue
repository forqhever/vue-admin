<template>
  <el-row>
    <el-col span="6">
      <img src="/static/img/vue/bi-binding.gif" width="100%"/>
    </el-col>
    <el-col span="6" offset="1">
      <el-card>绑定数据: \{{ message }}</el-card>
      <el-input v-model="message"></el-input>
      <el-button @click="reverseMessage">逆转消息</el-button>

      <ol>
        <li v-for="todo in todos">
          \{{ todo }}
        </li>
      </ol>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        message: 'hello world!',
        todos: [
          '学习js',
          '学习vue',
          '整个牛项目'
        ]
      }
    },
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
