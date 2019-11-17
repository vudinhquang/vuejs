import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import { tasksRef } from '../config/firebase'
import { STATUS_CONFIG } from '../config/const'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        listTasks: {},
        isLoading: false
    },
    getters: {
        getListTaskFilter: (state) => {
            if (state.listTasks) {
                let listTasks = state.listTasks;
                let todo = [], inProcess = [], toVerify = [], done = [];
                for (let key in listTasks) {
                    let value = listTasks[key];
                    let data = {
                        id: key,
                        ...value
                    };

                    switch (data.status) {
                        case STATUS_CONFIG.TODO.value:
                            todo.push(data)
                            break;
                        case STATUS_CONFIG.IN_PROGRESS.value:
                            inProcess.push(data)
                            break;
                        case STATUS_CONFIG.TO_VERIFY.value:
                            toVerify.push(data)
                            break;
                        case STATUS_CONFIG.DONE.value:
                            done.push(data)
                            break;
                        default:
                            break;
                    }
                }

                return { todo, inProcess, toVerify, done };
            }
        }
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
        onListenerTasks({ commit }) {
            let flag = false;
            commit('setLoading', true);
            tasksRef.on('value', function(snapshot) {
                commit('set_list_tasks', snapshot.toJSON());
                if (!flag) {
                    flag = true;
                    commit('setLoading', false);
                }
            });
        },
        async createTask({ commit }, data) {
            commit('setLoading', true);
            try {
                let taskId = uuidv4();
                await tasksRef.child(taskId).set(data);
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