<template>
  <div>
    <image-view
      v-for="img in images"
      :src="img.url"
      :cls="img.cls"
    >
    </image-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {url: '/static/img/menu.png', cls: 'rotate'},
          {url: '/static/img/user.png', cls: 'scale'},
          {url: '/static/img/settings.png', cls: 'rotate'},
          {url: '/static/img/template.png', cls: 'scale'},
          {url: '/static/img/password.png', cls: 'rotate'},
          {url: '/static/img/user-manager.png', cls: 'scale'}
        ]
      }
    }
  }
</script>
