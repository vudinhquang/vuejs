import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Start State
  state: {
    count: 10,
    value: 1000,
    value2: 3000
  },
  // Start Gettters
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
  // Start Mutations
  mutations: {
    increment(state, number) {
      console.log('Mutations increment', state);
      state.count += number;
    },
    decrement(state, number = 1) {
      console.log('Mutations decrement', state);
      state.count -= number;
    }
  },
  // Start Actions
  actions: {
    increment({ commit, dispatch, state }, obj) {
      console.log('actions increment ', state.value2);
      dispatch('testABC');
      commit('increment', obj.number);
    },
    decrement({ commit }, obj) {
      console.log('actions decrement ', obj);
      commit('decrement', obj.number);
    },
    testABC(context) {
      console.log('test ABC');
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue