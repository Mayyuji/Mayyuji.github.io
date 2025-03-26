---
title: 'Next.js重构博客&迁移记录'
date: '2025-03-26'
tags: ''
---

## Next.js重构博客&迁移记录
> node 22

> Next.js 15

### 项目搭建

* Next创建原始空白项目[中文参考](https://www.nextjs.cn/learn/basics/create-nextjs-app/setup)
* 创建`components/layout`实现页面布局
* 引入`gray-matter`支持读取文件元数据
* 引入`remark`,`remark-html`实现对md文件的页面渲染
* 使用`getStaticProps`配合`fs`实现文章元数据渲染
* 使用`fs`模块和`getStaticPaths`实现动态路由效果

### 部署


