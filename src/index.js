import AreaCascader from './lib/area-cascader/index.vue'

// 可以放入多个组件，一起抛出
const components = [
  AreaCascader
]

export {
  AreaCascader
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
