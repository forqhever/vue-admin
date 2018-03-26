<template>
  <div>
    <el-card>
      链接:
      <ul>
        <li v-for="base in baselist">
          <span>\{{ base.name }}: <a :href="base.link">\{{ base.link }}</a></span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        baselist: [
          {name: 'vue', link: 'https://cn.vuejs.org/v2/guide/installation.html'},
          {name: 'vue-cli', link: 'https://github.com/vuejs/vue-cli'},
          {name: 'element-ui', link: 'http://element-cn.eleme.io/#/zh-CN/component/installation'},
          {name: 'icon', link: 'http://www.iconfont.cn/'},
          {name: 'vue-router', link: 'https://router.vuejs.org/zh-cn/'},
          {name: 'vuex', link: 'https://cn.vuejs.org/v2/guide/state-management.html'}
        ]
      }
    }
  }
</script>
