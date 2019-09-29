import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import moduleCart from './cart'
import moduleProduct from './product'

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
    }
})

store.commit('product/increment')

export default store