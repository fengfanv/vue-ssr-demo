# vue-ssr-demo 

> 感谢Github作者：[liaojunhongyue](https://github.com/liaojunhongyue/) 能够整理出此Demo（ [vue-hackernews-demo](https://github.com/liaojunhongyue/vue-hackernews-demo) ）

> `vue-hackernews-2.0`支持服务端渲染，此demo是用`vue-hackernews-2.0`做的，主要用于了解服务端渲染。

> 初次接触服务器渲染或初次阅读源码时，建议配合 [VueSSR官网](https://ssr.vuejs.org/) 的教程一起来阅读

## 项目启动

1. 执行`npm install`安装依赖；
2. 进入到`mock`文件夹下，执行`node server.js`，启动模拟项目需要使用ajax异步请求的接口；
3. 在进入到项目中执行`npm run dev`启动项目；
4. 执行`npm run build`项目打包；
5. 执行`npm start`运行已打包后的项目；

## 项目主要包含

1. 用express取mock数据；
2. 给`vue-hackernews-2.0`框架增加`eslint-loader`、`less-loader`的配置；
3. 增加`element-ui`；
4. 封装`axios`来发送请求；
5. 用`asyncData`和`store`做数据的预取和存储。

