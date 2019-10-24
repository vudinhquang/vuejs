import './plugins'
import './assets/style.css'
import Vue from 'vue'
import App from './App.vue'

import store from './store';
import router from './router';

import './demoAsyc/demo6'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
