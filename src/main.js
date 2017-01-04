import Vue from 'vue'
import index from 'components/App.vue'
import clock from 'components/clock.vue'
import coin from 'components/coin.vue'
import mario from 'components/mario.vue'
import cast from 'components/cast.vue'
import cast1 from 'components/cast1.vue'
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
    {path:'/coin',component:coin,redirect: '/coin/cast',children:[
      {
        path: 'cast',
        component: cast
      },
      {
        path: 'cast1',
        component: cast1
      }
    ]
    },
    {path:'/mario',component:mario}
    //{path:'/posts', component: profile}
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

