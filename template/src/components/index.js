import ImageView from './image-view'

const components = [
  ImageView
]

const install = function (Vue, opts = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ImageView
}
