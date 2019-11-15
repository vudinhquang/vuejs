import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listUsers: {},
        isLoading: false
    },
    getters: {

    },
    mutations: {
        SET_LOADING: (state, loading = false) => {
            state.isLoading = loading;
        }
    },
    actions: {
        setLoading({ commit }, loading = false) {
            commit('SET_LOADING', loading)
        }
    }
});

export default store;