# Vue-NewFrame

## 介绍
> 使用vue实现前端框架
> 团队练手项目，用于学习vue
> 使用到的技术栈：

----------
 1. Vue        -----------------------------  框架
 2. Vue-router -----------------------------  路由
 3. Vuex       -----------------------------  状态管理
 4. Axios      -----------------------------  网络请求库
 5. Element    -----------------------------  组件库

## **代码提交说明**

> 1. 每位开发人员在本地与远程分别创建属于自己的分支
> 2. 自己负责的模块确定无误后合并到dev分支
> 3. 团队测试通过后才将dev分支合并到master分支
> 4. 每天离开实验室前提交代码到自己的分支

## 目录结构
```shell
├── 组织机构管理  
│       ├── 角色管理
│       ├── 操作员管理
│       ├── 权限点管理	   
├── 权限管理  
│       ├── 功能模块管理				
├── 模块管理                          
│       ├── 功能模块管理  
├── 码表管理 
│       ├── 码表管理 
│       ├── 码表类型管理 	
├── 视图管理                          
│       ├── 数据源管理 
│       ├── 视图管理
│       ├── 树形结构管理
├── 配置管理
│       ├── 编码管理 
│       ├── 导入配置管理 
│       ├── 系统参数管理 
│       ├── 模板文件管理 
│       ├── 日志管理                   	
├── 动态表单管理                         
│       ├── 模型管理 
│       ├── 动态表单设计 	
├── 统计报表 
│       ├── 统计报表   	
├── 计划任务管理  
│       ├── 计划任务                        
├── 代码生成   
│       ├── 代码生成
```

## 目录结构
```shell
├── build                        // 编译后代码
├── config                       // 配置
├── src                          // 源码
│   ├── assets                   // 资源文件
│       ├── css                  // css
│       ├── js                   // js
│       ├── img                  // img
│   ├── api                      // 所有的请求
│   ├── components               // 全局UI组件
│   ├── mock                     // 模拟数据
│   ├── router                   // 路由
│   ├── store                    // 状态管理
│		├── modules              // 状态管理模块
│   ├── utils                    // 公用的方法、工具
│   ├── view                     // 界面
│		├── login                // 登陆
│       ├── main                 // 主要功能模块
│           ├── organization     // 组织机构管理
│           ├── permission       // 权限管理
│           ├── model            // 模块管理
│           ├── codeTable        // 码表管理
│           ├── view             // 视图管理
│           ├── config           // 配置管理
│           ├── dynamicForm      // 动态表单
│           ├── reportForm       // 统计报表
│           ├── scheduleTask     // 计划任务管理
│           ├── codeGenerator    // 代码生成
│   ├── App.vue                  // 入口界面
│   ├── main.js                  // 入口js
├── test                         // 单元测试
├── .babelrc                     // babel-loader配置
├── eslintrc.js                  // eslint配置
├── .gitignore                   // git忽略项
├── index.html                   // 界面主体
├── favicon.ico                  // favicon图标
├── package.json                 // package.json
```

## 构建
### 推荐使用yarn
> yarn安装依赖速度快于npm
``` bash
# install dependencies
yarn/npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```