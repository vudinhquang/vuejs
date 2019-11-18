import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import './assets/style.css'
import { auth } from './config/firebase'


Vue.use(Datetime)

auth.onAuthStateChanged(function(user) {
  if (user) {
    let data = { email: user.email, uid: user.uid };
    store.commit('set_current_user', data);
    router.push('/');
  } else {
    let data = { email: '', uid: '' };
    store.commit('set_current_user', data);
    router.push('/login');
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
