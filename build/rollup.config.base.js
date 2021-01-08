import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import json from 'rollup-plugin-json'
// import less from 'rollup-plugin-less'
// 使rollup可以使用postCss处理样式文件less、css等
import postcss from 'rollup-plugin-postcss'
// 处理css定义的变量
import simplevars from 'postcss-simple-vars'
// 处理less嵌套样式写法
import nested from 'postcss-nested'

// 替代cssnext
import postcssPresetEnv from 'postcss-preset-env'
// css代码压缩
import cssnano from 'cssnano'
import fs from 'fs'

const config = require('../package.json')

const { name, version } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

export default {
  input: 'src/index.js',
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        // cssnext({ warnForDuplicates: false, }),
        postcssPresetEnv(),
        cssnano()
      ],
      // 处理.css和.less文件
      extensions: ['.css', 'less'],
      // 处理行内样式
      use: [
        'sass',
        ['less', { javascriptEnabled: true }]
      ]
    }),
    resolve({
      mainFields: ['module', 'jsnext:main', 'main', 'browser'],
      extensions: ['.vue']
    }),
    vue({
      css: true // 如果为false打包错误  https://github.com/vuejs/rollup-plugin-vue/issues/207
    }),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, new CleanCSS().minify(style).styles)
      }
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    cjs(),
    replace({
      VERSION: JSON.stringify(version)
    }),
    json()
  ],
  // 使用rollup打包，我们在自己的库中需要使用第三方库，例如lodash等，又不想在最终生成的打包文件中出现jquery。这个时候我们就需要使用external属性。比如我们使用了lodash，
  external: ['moment', 'ant-design-vue', 'axios', '@babel/runtime/regenerator'],
  // external: ['moment'], // 打包提示 'TreeNode' is not exported by node_modules\ant-design-vue\es\vc-tree\index.js,
  watch: {
    include: 'src/**'
  }
}
