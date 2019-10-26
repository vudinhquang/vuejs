import Vue from 'vue'
import Vuex from 'vuex'

import post from './modulePost'
import user from './moduleUser'

Vue.use(Vuex)

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
	state: {

    },
	modules: {
        post,
        user
    }
});

export default store;