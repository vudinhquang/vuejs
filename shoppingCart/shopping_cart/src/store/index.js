import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import moduleCart from './cart'
import moduleProduct from './product'

const myPlugin = store => {
    // called when the store is initialized
    console.log('myPlugin run', store);
    store.subscribe((mutation, state) => {
        // called after every mutation.
        console.log('subscribe run - ', mutation, '-', state);
        // The mutation comes in the format of `{ type, payload }`.
    })
}

Vue.use(Vuex)

const store = new Vuex.Store({
    // strict: true,
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    actions,
    mutations,
    modules: {
        cart: moduleCart,
        product: moduleProduct
    },
    plugins: [myPlugin]
})

store.commit('product/increment')
store.commit('product/increment', 30)

export default store