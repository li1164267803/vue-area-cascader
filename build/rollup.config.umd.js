import base, { name, file } from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name,
    file: file('umd'),
    format: 'umd',
    // 处理打包警告，全局变量
    // https://xudany.github.io/rollup/2019/08/13/rollup%E4%BD%BF%E7%94%A8%E8%BF%87%E7%A8%8B%E4%B8%AD%E9%81%87%E5%88%B0%E7%9A%84%E5%90%84%E7%A7%8D%E9%97%AE%E9%A2%98/
    globals: {
      'ant-design-vue': 'antDesignVue',
      'axios': 'axios',
      '@babel/runtime/regenerator': '_regeneratorRuntime'
    }
  }
})
export default config
