<template>
  <div id="header">
    <image-view
      id="menu_img"
      @click="onMenuClick"
      src="/static/img/menu.png"
      width="20px"
      cls="rotate">
    </image-view>
    <span>Vue Admin</span>
    <el-dropdown id="user-dropdown" @command="handleDropdownClick">
        <span id="user-info">
          \{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="settings">设置</el-dropdown-item>
        <el-dropdown-item divided command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: ''
      }
    },
    mounted () {
      this.username = localStorage.getItem('username')
    },
    computed: {
    },
    methods: {
      onMenuClick () {
        this.changeCollapsed()
      },
      changeCollapsed () {
        this.$store.state.isCollapsed = !this.$store.state.isCollapsed
      },
      handleDropdownClick (command) {
        if (command === 'logout') {
          localStorage.removeItem('token')
          localStorage.removeItem('username')
          this.$router.push('/login')
        } else if (command === 'settings') {
          this.$router.push('/settings')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  #header {
    color: white;
  }
  #menu_img, span {
    cursor: pointer;
    vertical-align: middle;
    margin-right: 10px;
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
