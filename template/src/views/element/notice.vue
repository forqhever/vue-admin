<template>
  <div>
    <el-button type="primary" @click="onAlertClick" icon="el-icon-warning">警告</el-button>
    <el-button type="primary" @click="onLoadClick" :loading="loading">加载</el-button>
    <el-button type="primary" @click="onMessageClick" icon="el-icon-message">消息</el-button>
    <el-button type="primary" @click="onNotificationClick" icon="el-icon-phone">通知</el-button>
    <el-button type="primary" @click="onMessageBoxClick" icon="el-icon-self-messagexinxi">弹框</el-button>
    <el-alert
      v-show="showAlert"
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      :closable="false"
      show-icon>
    </el-alert>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showAlert: false,
        loading: false
      }
    },
    methods: {
      onAlertClick () {
        this.showAlert = !this.showAlert
      },
      onLoadClick () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
      onMessageClick () {
        this.$message.success('显示消息!')
      },
      onNotificationClick () {
        const h = this.$createElement

        this.$notify({
          title: '标题名称',
          message: h('i', {style: 'color: teal'},
            '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        })
      },
      onMessageBoxClick () {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    }
  }
</script>
