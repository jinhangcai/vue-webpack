import Vue from 'vue'
import Vuex from 'Vuex'
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
Vue.use(Vuex);
//{path:'/clock',component:function(resolve){
//
//},name:'电影'},


window.store = new Vuex.Store({
  state: {
    login:false
  },
  mutations: {
    increment:state=>state.login = true,
    exit:state=>state.login = false
  }
});

window.routers = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',redirect: '/test/index',component:function(resolve){require(['components/App.vue'],resolve);},name:'首页'},
    {path:'/test',redirect: '/test/index',component:function(resolve){require(['components/App.vue'],resolve);},name:'首页'},
    {path:'/test/index',component:function(resolve){require(['components/App.vue'],resolve);},name:'首页'},
    {path:'/test/clock',component:function(resolve){require(['components/clock.vue'],resolve);},name:'电影'},
    {path:'/test/coin',component:function(resolve){require(['components/coin.vue'],resolve);}, name:'广播',
      children:[
        { path: '', component: function(resolve){require(['components/cast.vue'],resolve);}, name:'广播' },
        {
          path: '/test/coin/cast',
          component: function(resolve){require(['components/cast.vue'],resolve)},name:'广播'
        },
        {
          path: '/test/coin/cast1',
          component: function(resolve){require(['components/cast1.vue'],resolve);}, name:'广播'
        }
     ]
    },
    {path:'/test/mario',component:function(resolve){require(['components/mario.vue'],resolve)},name:'我的'},
    {path:'/test/login',component:function(resolve){require(['components/login.vue'],resolve)},name:'登录'}

  ]
});
//event bus
window.eventBus = new Vue();
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
  if(to.fullPath == '/login'){
    document.title = to.name;
    $('.router-link').hide();
    return;
  }
  if(to.fullPath == '/coin'){
    document.title = to.matched[0].name;
    return;
  }
  $('.router-link').show();
  document.title = to.name;
});
//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

