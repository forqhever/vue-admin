<template>
  <el-container id="container">
    <el-header>
      <span>Vue Admin</span>
      <i class="icon-collapsed el-icon-d-arrow-left" @click="changeCollapsed" v-show="!isCollapsed"></i>
      <i class="icon-collapsed el-icon-d-arrow-right" @click="changeCollapsed" v-show="isCollapsed"></i>
      <el-dropdown id="user-dropdown" @command="handleDropdownClick">
        <span id="user-info">
          \{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container id="main-container">
      <el-aside :span="menu_span">
        <el-menu
          default-active="2"
          id="main-menu"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapsed"
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
              <el-menu-item index="1-2">Form表单</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">Others</template>
                <el-menu-item index="1-4-1">提醒</el-menu-item>
              </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>自定义组件</span>
            </template>
            <el-menu-item index="error_page/404" class="menu-content">动画图片</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>错误页面</span>
            </template>
            <el-menu-item index="error_page/401" class="menu-content">401</el-menu-item>
            <el-menu-item index="error_page/404" class="menu-content">404</el-menu-item>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">使用说明</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>

    </el-container>

    <!-- 如果不需要底部栏,可以将下面三行去掉 -->
    <el-footer>
      ©2017 Xiaomi Huyu. All rights reserved.
    </el-footer>

  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        username: undefined,
        isCollapsed: false,
        menu_span: 5
      }
    },
    mounted () {
      this.username = localStorage.getItem('username')
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      changeCollapsed () {
        this.isCollapsed = !this.isCollapsed
        if (this.isCollapsed) {
          this.menu_span = 4
        } else {
          this.menu_span = 5
        }
      },
      handleDropdownClick (command) {
        if (command === 'logout') {
          localStorage.setItem('token', null)
          localStorage.setItem('username', undefined)
          this.$router.push('/login')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  #container {
    height: 100%;
  }
  #main-container {
    height: 100%;
  }
  #main-menu {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: $bg;
    color: white;
    line-height: 60px;
  }
  .el-footer {
     text-align: center;
   }
  .icon-collapsed {
    cursor: pointer;
    margin-left: 50px;
  }
  #user-dropdown {
    float: right;
    margin-right: 20px;
  }
  #user-info {
    color: white;
    cursor: pointer;
  }
</style>
