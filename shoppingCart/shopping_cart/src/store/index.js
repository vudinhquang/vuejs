import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import moduleCart from './cart'
import moduleProduct from './product'

const localStorage = store => {
    store.subscribe((mutation, state) => {
        // Lưu
        console.log("subscribe: ",state);
        window.localStorage.setItem("cart", JSON.stringify(state.cart));
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
    plugins: [localStorage]
})

store.commit('product/increment')
store.commit('product/increment', 30)

export default store