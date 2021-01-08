## 需求 与 功能

> 该功能实现了中国内的省市区的三级联动，基于 antd-vue 中的 Cascader 做的组件，支持原有的所有功能

#### 效果展示

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210108152054282.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMwOTM3NA==,size_16,color_FFFFFF,t_70)

#### 支持联想搜索

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210108152127569.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMwOTM3NA==,size_16,color_FFFFFF,t_70)

#### 支持显示部分省份

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210108152154566.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDMwOTM3NA==,size_16,color_FFFFFF,t_70)

###### 例子（本例子是基于 antd 做的，在 element-ui，或者是 iview 中，同样适用）

```html
<template>
  <AreaCascader v-model="data1" />
</template>
```

### API

**下面只列出了在本插件中二次封装添加的新字段，和部分原有 antd-vue 中 Cascader 部分默认的配置**  
**具体的 antd-vue 中 Cascader api 配置请点击下面链接，查看官方文档**
https://www.antdv.com/components/cascader-cn/

| 参数           | 说明                                         | 类型      | 默认值                                               |
| -------------- | -------------------------------------------- | --------- | ---------------------------------------------------- |
| expandTrigger  | 滑上展示下一级                               | _string_  | hover                                                |
| changeOnSelect | 点击选中 省市区，不用选择三级                | _boolean_ | true                                                 |
| placeholder    | 提示信息                                     | _string_  | 请搜索                                               |
| filterProvince | 外部传入的部分省 只显示部分省市区            | _array_   | []                                                   |
| fieldNames     | 自定义 options 中 label name children 的字段 | _Object_  | { label: 'name', value: 'id', children: 'children' } |

#### 注：

- 本插件相当于是对 antd-vue 组件 Cascader 的二次封装，支持 Cascader 原生组件的==所有 api 功能==
- 适用于在表格中展示，或者是正常的页面循环
- 但是如果想要调用原生 ui 组件的实例方法，通知 ref 绑定获取到的并不是 antd 的 Cascader 组件，如果想要调用 Cascader 的原生方法，==需要传递 forward-ref 参数绑定==

```html
<template>
  <AreaCascader @forward-ref="Cascader"></AreaCascader>
</template>

<script>
  // 即可调用原生方法
  this.$refs.Cascader.blur();
</script>
```

### 如 demo 例子可下载代码 执行 npm run demo:dev

### npm 插件地址

[https://www.npmjs.com/package/vue-area-cascader](https://www.npmjs.com/package/vue-area-cascader)

### 源码 觉得不错的 动动小手点个 star 三克油

[https://github.com/li1164267803/vue-area-cascader](https://github.com/li1164267803/vue-area-cascader)

### CSDN 博客

[https://blog.csdn.net/weixin_44309374/article/details/112365552](https://blog.csdn.net/weixin_44309374/article/details/112365552)

### demo 地址

[https://github.com/li1164267803/vue-area-cascader/tree/master/docs-src](https://github.com/li1164267803/vue-area-cascader/tree/master/docs-src)

## 编译 vue 插件的模板

**想要自己编译 vue 插件的，可以直接使用我这个模板**
[vue 编译组件模板](https://github.com/li1164267803/vue-area-cascader)

### package.json

修改 name 为你的组件名字

```json
{
  "name": "组件名字"
}
```

### 组件运行

```js
npm install
npm run dev // 实时编译
```

### 组件打包发布

```js
npm run build
npm publish
```

### 查看 demo 例子

```js
npm run demo:dev
```
