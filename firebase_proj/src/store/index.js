import Vue from 'vue'
import Vuex from 'vuex'
import uuidv4 from 'uuid/v4'
import { auth, tasksRef, usersRef } from '../config/firebase'
import { STATUS_CONFIG } from '../config/const'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentUser: {
            email: '',
            uid: ''
        },
        listUsers: {},
        listTasks: {},
        isLoading: false
    },
    getters: {
        isLogin: state => {
            if (state.currentUser.email && state.currentUser.uid) return true;
            return false;
        },
        getListTaskFilter: (state) => {
            let todo = [], inProcess = [], toVerify = [], done = [];
            if (state.listTasks) {
                let listTasks = state.listTasks;
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
            }
            return { todo, inProcess, toVerify, done };
        },
        getListEmailUser: (state) => {
            let arrEmails = [];
            if (state.listUsers) {
                let listUsers = state.listUsers;
                for (let key in listUsers) {
                    let value = listUsers[key];
                    arrEmails.push(value.email);
                }
            }
            return arrEmails;
        }
    },
    mutations: {
        setLoading: (state, loading = false) => {
            state.isLoading = loading;
        },
        set_list_tasks: (state, data = null ) => {
            state.listTasks = data;
        },
        set_list_users: (state, data = null ) => {
            state.listUsers = data;
        },
        set_current_user: (state, user = null) => {
            state.currentUser = user;
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
        onListenerUsers({ commit }) {
            usersRef.on('value', function(snapshot) {
                commit('set_list_users', snapshot.toJSON());
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
        },
        async login({ commit }, { email = "", password = "" }) {
            commit('setLoading', true);
            try {
                let result = await auth.signInWithEmailAndPassword(email, password);
                let user = {
                    email: email,
                    uid: result.user.uid
                };
                commit('set_current_user', user);
                commit('setLoading', false);
                return {
                    ok: true,
                    error: ''
                }
            } catch (error) {
                commit('setLoading', false);
                return {
                    ok: false,
                    error: error.message
                }
            }
        },
        async register({ commit }, { email = "", password = "" }) {
            commit('setLoading', true);
            try {
                let result = await auth.createUserWithEmailAndPassword(email, password);
                await usersRef.child(result.user.uid).set({
                    email: email,
                    role: 'member'
                });
                let user = {
                    email: email,
                    uid: result.user.uid
                };
                commit('set_current_user', user);
                commit('setLoading', false);
                return {
                    ok: true,
                    error: ''
                }
            } catch (error) {
                commit('setLoading', false);
                return {
                    ok: false,
                    error: error.message
                }
            }
        },
        async getTaskById({ commit }, id) {
            try {
                let result = await tasksRef.child(id).once('value');
                if (result.val()) {
                    return {
                        ok: true,
                        task: result.val()
                    }
                }
                return {
                    ok: false,
                    task: null,
                    error: null
                }
            } catch (error) {
                return {
                    ok: false,
                    error: error.message
                }
            }
        },

        async updateTask({ commit }, data) {
            commit('setLoading', true);
            try {
                await tasksRef.child(data.id).update(data.task);
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
        },
    }
});

export default store;