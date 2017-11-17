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
      <i class="el-icon-self-index"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-self-zujian"></i>
        <span>Element组件使用</span>
      </template>
      <el-menu-item index="/element/tree"><i class="el-icon-self-tree"></i>树形控件</el-menu-item>
      <el-menu-item index="/element/table"><i class="el-icon-self-table"></i>Table数据展示</el-menu-item>
      <el-menu-item index="/element/form"><i class="el-icon-self-form"></i>Form表单</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-self-table"></i>
          <span>Others</span>
        </template>
        <el-menu-item index="/element/notice"><i class="el-icon-self-notice"></i>提醒</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-self-zidingyi"></i>
        <span>自定义组件</span>
      </template>
      <el-menu-item index="/custom/image"><i class="el-icon-self-mi-icon-image"></i>动画图片</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-self-error"></i>
        <span>错误页面</span>
      </template>
      <el-menu-item index="/error_page/401"><i class="el-icon-self-401"></i>401</el-menu-item>
      <el-menu-item index="/error_page/404" class="menu-content"><i class="el-icon-self-404"></i>404</el-menu-item>
    </el-submenu>

    <el-menu-item index="/instruction">
      <i class="el-icon-self-shiyongshuoming"></i>
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
