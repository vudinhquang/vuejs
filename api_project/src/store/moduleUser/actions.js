import axiosInstance from '../../plugins/axios'

import { parseJwt } from '../../helpers'

export default {
    // increment ({ commit }) {
    //     commit('increment')
    // }
    async getUserById({ commit }, userId) {
        try {
            var result = await axiosInstance.get('/member/member.php?userid=' + userId);
            commit('set_user_info', result.data.user);
            if (result.data.status === 200) {
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async login({ commit }, { email= '', password= '' }) {
        commit('set_loading', true, { root: true });
        try {
            let data = {
                email: email,
                password: password 
            };
            var result = await axiosInstance.post('/member/login.php', data);
            commit('set_loading', false, { root: true });
            if (result.data.status === 200) {
                commit('set_user_info', result.data.user);
                commit('set_login_info', result.data);
                return {
                    ok: true,
                    error: null,
                    data: result.data
                }
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }
        } catch(error) {
            commit('set_loading', false, { root: true });
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async logout({ commit }) {
        commit('set_logout');
    },

    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem('ACCESS_TOKEN');
            let userObj = parseJwt(tokenLocal);

            if (userObj) {
                let resultUser = await dispatch('getUserById', userObj.id);
                if (resultUser.ok) {
                    let data = {
                        user: resultUser.data,
                        token: tokenLocal
                    };
                    commit('set_login_info', data);
                    return {
                        ok: true,
                        error: null
                    }
                }
            }
            return {
                ok: false
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    }
}