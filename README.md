# nodejs-colaui
Practice for demo nodejs + colaui

## 技术选型
* NodeJs v6.10.0
* Express V4.14.1
* Npm V3.10.10
* Cola-UI V0.9.8
* Pug V2.0.0-beta11

## 启动项目
* 进入项目目录, 下载依赖库, 构建项目: `npm install`
* 启动项目: `npm start`
* 项目启动成功后,打开浏览器 `http://localhost:3000`

## Express4 项目的结构
* bin, 存放启动项目的脚本文件
* node_modules, 存放所有的项目依赖库
* public, 静态文件（css，js，img）
* routes, 路由文件(MVC中的C,controller)
* views, 页面文件(Pug/Jade模板,Ejs模板,这里使用的是Pug/Jade模板)
* package.json, 项目依赖配置及开发者信息
* app.js, 应用核心配置, 程序启动文件

## package.json 项目配置
package.json 用于项目依赖配置及开发者信息, scripts 属性是用于定义操作命令的,
可以非常方便的增加启动命令,比如默认的start, 用npm start代表执行node ./bin/www命令
```
{
   "name": "nodejsdemo",
   "version": "0.0.0",
   "private": true,
   "scripts": {
     "start": "node ./bin/www"
   },
   "dependencies": {
     "body-parser": "~1.16.0",
     "cookie-parser": "~1.4.3",
     "debug": "~2.6.0",
     "express": "~4.14.1",
     "pug": "2.0.0-beta11",
     "morgan": "~1.7.0",
     "serve-favicon": "~2.3.2"
   }
 }
```

## npm install
> npm i 是npm install的简写,所以建议使用npm i

注意:直接使用`npm i`安装的模块不会写入package.json的
dependencies(或devDependencies), 还需要额外加个参数:
1. `npm i express --save`/`npm i express -S`(安装 express，同时将 "express": "^4.14.1" 写入 dependencies )
2. `npm i express --save-dev`/`npm i express -D`(安装 express，同时将 "express": "^4.14.1" 写入 devDependencies )
3. `npm i express --save --save-exact`(安装 express，同时将 "express": "^4.14.1" 写入 dependencies )

第3种方式会将固定版本号写入dependencies,所以建议线上的Node.js应用都采用这种锁定版本号的方式.
此外还可以运行以下命令:

`npm config set save-exact true`

这样每次`npm i xxx --save`的时候会锁定依赖的版本号,相当于加了`--save-exact`参数.

>`npm config set`命令将配置写到了~/.npmrc文件,可以运行`npm config list`查看.