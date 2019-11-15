import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import './assets/style.css'

import database from './config/firebase';

Vue.use(Datetime)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
