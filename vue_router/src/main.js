import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './plugins'

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
