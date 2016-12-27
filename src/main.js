import Vue from 'vue'
import App from 'components/App.vue'
import VueRouter from 'router'
import tab from 'components/tab.vue'
import 'jquery'
import  'stylus/test.css'
Vue.use(VueRouter);

var routers = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/index',component:App},
    {path:'/bomb',component:App },
    {path:'/clock',component:tab },
    {path:'/coin',component:App },
    {path:'/mario',component:App }
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

