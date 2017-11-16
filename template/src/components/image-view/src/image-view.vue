<template>
  <img :src="src" :width="width" :class="cls" :rotate="rotate"
   @click="onClick" />
</template>

<script>
  export default {
    name: 'image-view',
    props: {
      src: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '200px'
      },
      cls: {
        type: String,
        default: ''
      },
      rotate: {
        type: String,
        default: '0'
      }
    },
    data () {
      return {
        title: ''
      }
    },
    mounted () {
    },
    computed: {
    },
    methods: {
      onClick () {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  @keyframes rotate
  {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes scale
  {
    0%   { transform: scale(1); }
    100% { transform: scale(2); }
  }
  img {
    -webkit-transition: -webkit-transform 1s; /* Safari and Chrome */
    cursor: pointer;
  }
  img.circle {
    border-radius: 50%;
  }
  img.border {
    padding: 5px 5px 5px 5px;
    background: #ffffff;
    border: 1px solid #CCCCCC;
  }
  img.rotate:hover {
    /*animation: rotate 2s;*/
    transform: rotate(360deg);
  }
  img.scale:hover {
    transform: scale(2);
  }
</style>
