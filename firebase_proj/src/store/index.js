import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import database from '../config/firebase'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listTasks: {},
        isLoading: false
    },
    getters: {

    },
    mutations: {
        setLoading: (state, loading = false) => {
            state.isLoading = loading;
        },
        set_list_tasks: (state, data = null ) => {
            state.listTasks = data;
        }
    },
    actions: {
        setLoading({ commit }, loading = false) {
            commit('setLoading', loading)
        },
        async createTask({ commit }, data) {
            commit('setLoading', true);
            try {
                let taskId = uuidv4();
                await database.ref('tasks/' + taskId).set({ data });
                commit('setLoading', false);
                return {
                    ok: true,
                    error: null
                }
            } catch (error) {
                commit('setLoading', false);
                return {
                    ok: false,
                    error: error.message
                }
            }
        }
    }
});

export default store;