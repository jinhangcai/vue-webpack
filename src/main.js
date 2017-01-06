import Vue from 'vue'
//import index from 'components/App.vue'
//import clock from 'components/clock.vue'
//import coin from 'components/coin.vue'
//import mario from 'components/mario.vue'
//import cast from 'components/cast.vue'
//import cast1 from 'components/cast1.vue'
import VueRouter from 'router'
import 'jquery'
import  'stylus/test.css'
Vue.use(VueRouter);
//{path:'/clock',component:function(resolve){
//
//},name:'电影'},
var routers = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',redirect: '/index',component:function(resolve){require(['components/App.vue'],resolve);},name:'首页'},
    {path:'/index',component:function(resolve){require(['components/App.vue'],resolve);},name:'首页'},
    {path:'/clock',component:function(resolve){require(['components/clock.vue'],resolve);},name:'电影'},
    {path:'/coin',component:function(resolve){require(['components/coin.vue'],resolve);}, name:'广播',
      children:[
        { path: '', component: function(resolve){require(['components/cast.vue'],resolve);} },
        {
          path: 'cast',
          component: function(resolve){require(['components/cast.vue'],resolve);}
        },
        {
          path: 'cast1',
          component: function(resolve){require(['components/cast1.vue'],resolve);}
        }
     ]
    },
    {path:'/mario',component:function(resolve){require(['components/mario.vue'],resolve)},name:'我的'}
  ]
});
var app = new Vue({
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  router:routers,
  //render:h=>h(App)

}).$mount('#app');
routers.afterEach((to, from, next) => {
  if(to.fullPath == '/coin'){
    document.title = to.matched[0].name;
    return;
  }
  document.title = to.name;
});
//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

