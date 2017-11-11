<template>
  <el-menu
    :default-active="$store.state.path"
    id="main-menu"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    :collapse="$store.state.isCollapsed"
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">

    <el-menu-item index="/">
      <i class="el-icon-setting"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>Element组件使用</span>
      </template>
      <el-menu-item index="/element/tree">树形控件</el-menu-item>
      <el-menu-item index="/element/table">Table数据展示</el-menu-item>
      <el-menu-item index="/element/form">Form表单</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title">Others</template>
        <el-menu-item index="/element/alert">提醒</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>自定义组件</span>
      </template>
      <el-menu-item index="/custom/image" class="menu-content">动画图片</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>错误页面</span>
      </template>
      <el-menu-item index="/error_page/401" class="menu-content">401</el-menu-item>
      <el-menu-item index="/error_page/404" class="menu-content">404</el-menu-item>
    </el-submenu>

    <el-menu-item index="/introduction">
      <i class="el-icon-setting"></i>
      <span slot="title">使用说明</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log('select:')
        console.log(key, keyPath)
      },
      handleOpen (key, keyPath) {
        console.log('open:')
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log('close:')
        console.log(key, keyPath)
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  #main-menu {
    height: 100%;
  }
</style>
