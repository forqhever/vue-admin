<template>
  <div>
    404 Not Found!
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created () {
      console.log('404 created!')
    },
    mounted () {
      console.log('404 mounted!')
    },
    computed: {
      key () {
        return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
      }
    }
  }
</script>
