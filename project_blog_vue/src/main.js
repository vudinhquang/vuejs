import Vue from 'vue'
import App from './App.vue'

import router from './router'

import blogs from './mock/blogs'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
