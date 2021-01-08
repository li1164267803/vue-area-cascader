import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'ant-design-vue/dist/antd.css'

// https://blog.csdn.net/yanzhi_2016/article/details/85339420 Vue.use 和 Vue.component的区别

// 只引入某一个插件
// import { XiwenTooltip } from '../dist/xiwen-tooltip.esm'
// Vue.component(XiwenTooltip, XiwenTooltip.name)

// 全部引入
// import xiwenUtil from '../dist/xiwen-tooltip.esm'
// Vue.use(xiwenUtil)

// import('../package.json').then(config => import(`../dist/${config.name}.css`))

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
