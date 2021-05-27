---
title: Git和Markdown的基本语法
date: 2021-04-27 11:08:29
categories:
  - Grammar
tags:
  - Markdown
  - Git
---

## git 使用

### 1. git 初始化

```bash
$ cd 目录
$ git init
```

> 出现了一个.git 文件(隐藏文件)，存放当前仓库的一些基本信息。
>
> 初始化，以后，会在本机生成一个仓库，暂存区的虚拟仓库。

### 2. 创建文件

```bash
$ touch 文件名
$ mkdir 目录名
```

> Readme.md 说明书

### 3. 从工作区->暂存区

```bash
$ git add */./文件名
$ git commit -m "这次提交的描述信息"
$ git status  查看提交状态
$ git diff  查看工作区和暂存区代码的区别
```

### 4. git 版本

```bash
$ git log   查看当前的提交版本
```

> 版本的回滚。

```bash
 $ git reset --hard HEAD^
 $ git reset --hard HEAD^^
 $ git reset --hard 版本号
 $ git reset --hard HEAD~版本序号
 $ git reflog 查看已经执行的命令(解决回到之前版本后不知道最新版本的,版本号问题)
```

### 5、配置远程仓库的用户信息

```bash
$ git config --global user.name "你的git名称"
$ git config --global user.email "你的git验证邮箱"
```

### 6、配置 ssh 密匙

```bash
 $ ssh-keygen -t rsa –C "youremail@example.com"
```

### 7、上传到远程仓库

```bash
$ git remote add origin https://github.com/BullFei/gitTest.git
$ git push -u origin master
```

### 8、从第二次开始

```bash
git add
git push orgin ..//简写
```

### 9、克隆数据

```bash
$ git clone 仓库地址
```

### 10、从远程仓库更新数据

```bash
$ git pull
```

### 11、忽略某些文件 新建 .gitignore

> 配置你想忽略文件路径
> 文件后缀为 .gitignore
> 文件名

### git 分支相关

> `git bransh` 查看本地所有分支
>
> `git branch -a`产看远程分支
>
> `git push origin master` 将文件给推到服务器上
>
> `git remote show origin `显示远程库 origin 里的资源
>
> `git checkout -b dev `建立一个新的本地分支 dev
> `git merge origin/dev` 将分支 dev 与当前分支进行合并
> `git checkout xxx `切换到本地 xxx 分支

## md 基本语法

### 1.标题

> 标题 # 一级标签
> 闭合标题 # 一级标题 #

### 2.列表

> ​ 无序列表 \* - + 都可,嵌套列表
> ​ 有序列表 数字加英文 .

### 3.引用说明区块

> ​ 用英文的 > + space
> ​ 嵌套区块

### 4.代码块

> ​ \`需要写入的单行代码`
> ​ \```多行代码```

### 5.链接

> ​ \[md](https://www.jianshu.com "连接写法")

### 6.分割线

```
    三个 --- *** ___
    中间可以有空格
```

### 7.转义字符

> ​ \\ 斜杠加需要转义的字符

### 8.文本删除线

> ​ \~~需要删除的文字~~

### 9.换行

> ​ \<br>可以实现换行 <br/> 列表也可以实现换行
>
> ​ 或者两行文本之间是空一行也可以换行

## nvm 常用

```cmd
   $ nvm install node     //安装最新版 Node
   $ nvm                  // 会提示nvw下的相关命令
   $ nvm list             // 查看已安装node版本  nvm ls
   $ nvm install vXX      // 安装对应vXX版本的node
   $ nvm uninstall vXX    // 卸载对应vXX版本的node
   $ nvm use xxx          // 选择使用XXX版本
```

nvm 安装 node 之后 会显示 ues 刚安装的版本 但是还需要自己 nvm use 一次
