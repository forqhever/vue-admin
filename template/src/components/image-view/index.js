import ImageView from './src/image-view.vue'

ImageView.install = function (Vue) {
  Vue.component(ImageView.name, ImageView)
}

export default ImageView
