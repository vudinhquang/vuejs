import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import database from '../config/firebase'

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
        },
        async createTask({ commit }, data) {
            try {
                let taskId = uuidv4();
                const tasksRef = await database.ref('tasks/' + taskId).set({ data });

                console.log(tasksRef);
            } catch (error) {
                return {
                    error: error.message
                }
            }
        }
    }
});

export default store;