import Vue from 'vue'
import index from 'components/App.vue'
import clock from 'components/clock.vue'
import coin from 'components/coin.vue'
import mario from 'components/mario.vue'
import profile from 'components/profile.vue'
import VueRouter from 'router'
import 'jquery'
import  'stylus/test.css'
Vue.use(VueRouter);

var routers = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',redirect: '/index',component:index},
    {path:'/index',component:index},
    {path:'/clock',component:clock},
    {path:'/coin',component:coin},
    {path:'/mario',component:mario
    //  ,children:[
    //  {
    //    path: ':id',
    //    component: profile
    //  }
    //]
    },
    {path:'/posts', component: profile}
  ]
});
var app = new Vue({
  router:routers,
  //render:h=>h(App)

}).$mount('#app');


//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

