module.exports = {
  'presets': [
    [
      '@babel/env', {
        'modules': false
      }
      // { loader: 'less-loader', options: { javascriptEnabled: true }}
    ]
    // [
    //   'import',
    //   { 'libraryName': 'ant-design-vue', 'libraryDirectory': 'es', 'style': false }
    // ]
  ],
  // 解决regeneratorRuntime is not defined 报错 必备的包 ES6 async await
  // https://blog.csdn.net/gwdgwd123/article/details/110957685
  'plugins': [
    ['@babel/plugin-transform-runtime', {
      'corejs': false,
      'helpers': false,
      'regenerator': true,
      'useESModules': false
    }]

  ]
}
