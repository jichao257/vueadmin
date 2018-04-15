# vue-singlepage-admin for laravel
[TOC]

## 安装

### 下载

	git clone

### 初始化 laravel 项目

下载 laravel 项目中的组件，并初始化 laravel 项目，此处不做赘述。

### 下载 vue 相关组件

进入到 laravel 项目根目录运行：

	npm install

下载所有依赖，下载完成后运行下面的命令来启动开发模式：

	npm run watch

当然当项目正式运行时只需运行：

	npm run build

即可，编译打包后的文件将会放在 laravel 项目中的 public 目录下，即：

	public/js/app.js
	public/css/app.css

而相应的静态文件如图片，字体文件等都会打包到 public 相应的目录之中。接下来我们只要在 laravel 的任意 view 模板中引入上面的 js 和 css 文件就可以正常使用了。当然在模板中我们仍然需要创建一个 id 为 `app` 的 dom 元素作为 vue 模板的挂载点，如：

    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <title>Laravel</title>
            <link rel="stylesheet" href="/css/app.css">
        </head>
        <body>
            <div id="app"></div>
            <script src="/js/app.js"></script>
        </body>
    </html>

## 简介

这是一个为 laravel 项目定制的，使用 `vue, vuex, vue-router, element-ui, axios` 等 vue 相关组件构建的，基于配置的后台页面生成器的 laravel 起始项目。

简单来说，这可以帮助我们从繁琐的后台页面构建中脱离出来，通过简单配置我们可以得到一套比较完善的后台页面，它将根据我们的配置生成页面，及页面中的表格，表单等。还可以通过配置 route 访问 laravel 项目中的 resource 路由中的对应的方法。

与此同时，我们可以通过只维护一套模板，而达到维护项目中所有的后台模板的效果。

**工作原理：**

![工作原理](http://jichao-oss.oss-cn-beijing.aliyuncs.com/vue-singlepage-admin/vue-singlepage-admin%20%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%20.png?x-oss-process=style/w_900)

如上图我们只使用一套页面模板，通过切换不同的 module 来读取 module 中的配置来渲染不同页面，我们通过访问统一的接口来和 laravel 项目中不同的 resource 路由做数据上的交互。

页面效果：

![页面效果](http://jichao-oss.oss-cn-beijing.aliyuncs.com/vue-singlepage-admin/%E9%A1%B5%E9%9D%A2%E6%95%88%E6%9E%9C.png?x-oss-process=style/w_900)

## 目录结构

## 开始

## module

## 页面模板

## 访问接口


