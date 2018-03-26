<template>
  <div>
    \{{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      async init () {
        let res = await this.$http.get('/')
        this.msg = res.data
        let el = document.createElement('html')
        el.innerHTML = res.data
        console.log('success!')
        console.log(el.getElementsByTagName('title'))
      }
    }
  }
</script>
