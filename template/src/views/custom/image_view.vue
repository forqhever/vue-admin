<template>
  <el-row>
    <el-col span="10">
      <el-card>
        组件设计初衷就是要配合使用的，最常见的就是形成父子组件的关系：组件 A 在它的模板中使用了组件 B。它们之间必然需要相互通信：父组件可能要给子组件下发数据，子组件则可能要将它内部发生的事情告知父组件。然而，通过一个良好定义的接口来尽可能将父子组件解耦也是很重要的。这保证了每个组件的代码可以在相对隔离的环境中书写和理解，从而提高了其可维护性和复用性。
        <br><br>
        在 Vue 中，父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。看看它们是怎么工作的。
        <img src="/static/img/vue/props-events.png" width="100%"/>
      </el-card>
    </el-col>
    <el-col span="10" offset="1">
      <image-view
        v-for="img in images"
        :src="img.url"
        :cls="img.cls"
      >
      </image-view>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {url: '/static/img/menu.png', cls: 'rotate'},
          {url: '/static/img/template.png', cls: 'rotate'},
          {url: '/static/img/settings.png', cls: 'rotate'},
          {url: '/static/img/password.png', cls: 'scale'},
          {url: '/static/img/user.png', cls: 'scale'},
          {url: '/static/img/user-manage.png', cls: 'scale'}
        ]
      }
    }
  }
</script>
