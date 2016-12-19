import Vue from 'vue'
import App from 'components/App.vue'
import VueRouter from 'router'
import tab from 'components/tab.vue'
import 'stylus/test.css'
//import 'bootstrap/dist/css/bootstrap.css'
Vue.use(VueRouter)

var routers = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:'/',component:App},
    {path:'/about',component:App},
    {path:'/home',component:tab },
    {path:'/home/:id',component:App }
  ]
});
var app = new Vue({
  router:routers
  //render:h=>h(tab)
}).$mount('#app');
//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

