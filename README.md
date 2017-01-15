# vue+vue-router+webpack
介绍
----------------
> 使用vue开发，webpack打包，vue-router路由开发的仿造H5豆瓣写的一个单页面 首页滑动组件使用了vue-slider组件
项目依赖
----------------
该项目使用webpack构建工具 全局安装webpack npm install webpack
使用了webpack-dev-server来跑本地服务
页面预览
----------------
npm run dev
发布
----------------
npm run dist
ps:
----------------
1:这个项目不是跑的本地根文件,而是在根项目上的test文件，如有需要把路由下的test删除或自己在根目录下创建一个test文件
2:跑本地环境，请在package.json文件中把dev --host 的ip改成自己对应的ip名，默认本地ip(127.0.0.1)