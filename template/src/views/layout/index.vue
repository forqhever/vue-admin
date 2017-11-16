<template>
  <el-container id="container">

    <!-- 头部 -->
    <el-header>
      <nav-bar></nav-bar>
    </el-header>

    <!-- 外层容器 -->
    <el-container id="main-container">
      <!-- 侧边栏菜单 -->
      <menu-bar :style="menu_style"></menu-bar>

      <!-- 主区域 -->
      <el-main>
        <tabs-bar></tabs-bar>
        <router-view />
      </el-main>
    </el-container>

    <!-- 底栏容器,如果不需要底栏,可以将下面三行去掉 -->
    <el-footer height="40px">
      <footer-bar></footer-bar>
    </el-footer>

  </el-container>
</template>

<script>
  import NavBar from './header.vue'
  import MenuBar from './menu.vue'
  import TabsBar from './tabs.vue'
  import FooterBar from './footer.vue'

  export default {
    name: 'layout',
    components: {
      NavBar,
      MenuBar,
      TabsBar,
      FooterBar
    },
    data () {
      return {
        menu_width: 300
      }
    },
    computed: {
      menu_style () {
        return this.$store.state.isCollapsed ? {} : { width: this.menu_width + 'px' }
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import "~assets/scss/color.scss";

  #container {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: $bg;
  }
  .el-header {
     line-height: 60px;
   }
  .el-footer {
     line-height: 40px;
   }
</style>
