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

```flow
st=>start: Start
i=>inputoutput: 输入年份n
cond1=>condition: n能否被4整除？
cond2=>condition: n能否被100整除？
cond3=>condition: n能否被400整除？
o1=>inputoutput: 输出非闰年
o2=>inputoutput: 输出非闰年
o3=>inputoutput: 输出闰年
o4=>inputoutput: 输出闰年
e=>end
st->i->cond1
cond1(no)->o1->e
cond1(yes)->cond2
cond2(no)->o3->e
cond2(yes)->cond3
cond3(yes)->o2->e
cond3(no)->o4->e
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
│   ├── utils                    // 公用的方法、工具
│   ├── view                     // 界面
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