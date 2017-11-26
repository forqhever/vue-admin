<template>
  <el-row>
    <el-col span="12">
      <img src="/static/img/vue/lifecycle.png" width="100%"/>
    </el-col>
    <el-col span="12">
      <el-card>
        每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码。
      </el-card>
      <el-card>
        vue生命周期:
        <ol>
          <li v-for="step in lifecycle">
            \{{ step }}
          </li>
        </ol>
      </el-card>
      <el-card>\{{ message }}</el-card>
      <el-button @click="test1">改变message</el-button>
    </el-col>
  </el-row>
</template>
<script>
  let cycle = []
  export default {
    data () {
      console.log('data!')
//      alert('data')
      cycle.push('data')
      return {
        lifecycle: cycle,
        message: 'hello'
      }
    },
    methods: {
      test1 () {
        this.message += ' world'
      }
    },
    beforeCreate () {
      console.log('beforeCreate!')
//      alert('beforeCreate!')
      cycle.push('beforeCreate')
    },
    created () {
      console.log('created!')
//      alert('created!')
      cycle.push('created')
    },
    beforeMount () {
      console.log('beforeMount!')
//      alert('beforeMount!')
      cycle.push('beforeMount')
    },
    mounted () {
      console.log('mounted!')
//      alert('mounted!')
      cycle.push('mounted')
    },
    beforeUpdate () {
      console.log('beforeUpdate!')
//      alert('beforeUpdate')
//      cycle.push('beforeUpdate')
    },
    updated () {
      console.log('updated!')
//      alert('updated')
//      cycle.push('updated')
    },
    beforeDestroy () {
      console.log('beforeDestroy!')
//      alert('beforeDestroy!')
      cycle.push('beforeDestroy')
    },
    destroyed () {
      console.log('destroyed!')
//      alert('destroyed!')
      cycle.push('destroyed')
    }
  }
</script>
