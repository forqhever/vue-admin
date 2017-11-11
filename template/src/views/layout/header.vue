<template>
  <div id="header">
    <span>Vue Admin</span>
    <i class="icon-collapsed el-icon-d-arrow-left" @click="changeCollapsed" v-show="!$store.state.isCollapsed"></i>
    <i class="icon-collapsed el-icon-d-arrow-right" @click="changeCollapsed" v-show="$store.state.isCollapsed"></i>
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
