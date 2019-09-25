import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
    value: 1000,
    value2: 3000
  },
  getters: {
    count: state => {
      return state.count;
    },
    value: state => {
      return state.value;
    },
    countDouble: state => {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state, number) {
      console.log('Mutations increment', state);
      state.count += number;
    },
    decrement(state, number) {
      console.log('Mutations decrement', state);
      state.count -= number;
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue