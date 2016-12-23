import Vue from 'vue'
import App from 'components/App.vue'
import VueRouter from 'router'
import tab from 'components/tab.vue'
import 'jquery'
import slider from 'script/slider'
//import  'stylus/test.css'
Vue.use(VueRouter);

var routers = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:App},
    {path:'/clock',component:tab },
    {path:'/coin',component:App },
    {path:'/mario',component:App }
  ]
});
var app = new Vue({
  router:routers
  //render:h=>h(tab)

}).$mount('#app');


var slideImgList = eval($('#slideImgList').val());
console.log(slideImgList);

 new slider({
  sliderBox :$('.slider')[0], //容器
  sliderDate:slideImgList,    //内容
  sliderTime:5000,          //自动切换时间
  lazyload:true               //是否懒加载
});
//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

