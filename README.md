# xiwen-tooltip

## 需求 与 功能

> 该功能实现了文字过长时溢出裁切显示... 鼠标滑上使用 tooltip 显示全部内容  
> 文字少时，没有裁切，鼠标滑上不显示 tooltip

#### 在表格中使用

##### 效果展示

![希文插件功能](https://img-blog.csdnimg.cn/20201210113319367.gif)

#### 在普通循环 list 中使用

##### 效果展示

![文字少时](https://img-blog.csdnimg.cn/20201210151224677.gif)

###### 例子（本例子是基于 antd 做的，在 element-ui，或者是 iview 中，同样适用）

```html
<template>
  <div class="box">
    <XiwenTooltip
      title="鼠标滑上使用 tooltip 显示全部内容 文字少时，没有裁切，鼠标滑上不显示 tooltip 希文出品 必属精品"
    />
  </div>
</template>
<style lang="less">
  .box {
    width: 200px;
    height: 50px;
    border: 1px solid #000;
  }
</style>
```

### API

**下面只列出了在本插件中二次封装添加的新字段，和部分原有 antd-vue 中 tooltip 部分默认的配置**  
**具体的 antd-vue 中 tooltip api 配置请点击下面链接，查看官方文档**
https://www.antdv.com/components/tooltip-cn/#API

| 参数             | 说明                    | 类型     | 默认值           |
| ---------------- | ----------------------- | -------- | ---------------- |
| title            | 需要 Tooltip 显示的文本 | _string_ | -                |
| detail           | 初始值                  | _object_ | -                |
| btnText          | 按钮文本                | _string_ | -                |
| cuttingNum       | 显示几行后开始裁切      | _Number_ | 2                |
| placement        | 气泡框位置              | _string_ | rightTop         |
| overlayClassName | 卡片类名                | _string_ | xiwen-preinstall |

#### 注：

- 本插件相当于是对 antd-vue 组件 tooltip 的二次封装，支持 tooltip 原生组件的==所有 api 功能==
- 适用于在表格中展示，或者是正常的页面循环
- 但是如果想要调用原生 ui 组件的实例方法，通知 ref 绑定获取到的并不是 antd 的 tooltip 组件，如果想要调用 tooltip 的原生方法，==需要传递 forward-ref 参数绑定==

```html
<template>
  <XiwenTooltip @forward-ref="tooltip" title="希文出品"></XiwenTooltip>
</template>

<script>
  // 即可调用原生方法
  this.$refs.tooltip.visibleChange(callback);
</script>
```

### 如 demo 例子可下载代码 执行 npm run demo:dev

### npm 插件地址

[https://www.npmjs.com/package/xiwen-tooltip](https://www.npmjs.com/package/xiwen-tooltip)

### 源码 觉得不错的 动动小手点个 star 三克油

[https://github.com/li1164267803/xiwen-tooltip](https://github.com/li1164267803/xiwen-tooltip)

### CSDN 博客

[https://blog.csdn.net/weixin_44309374/article/details/110949487](https://blog.csdn.net/weixin_44309374/article/details/110949487)

### demo 地址

[https://github.com/li1164267803/xiwen-tooltip/tree/master/docs-src](https://github.com/li1164267803/xiwen-tooltip/tree/master/docs-src)

## 编译 vue 插件的模板

**想要自己编译 vue 插件的，可以直接使用我这个模板**
[vue 编译组件模板](https://github.com/li1164267803/xiwen-tooltip)

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
