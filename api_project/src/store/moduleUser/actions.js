import axiosInstance from '../../plugins/axios'

import { parseJwt } from '../../helpers'
import { CONFIG_ACCESS_TOKEN } from '../../constants'

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
    async login({ commit, dispatch }, { email= '', password= '' }) {
        commit('set_loading', true, { root: true });
        try {
            let data = {
                email: email,
                password: password 
            };
            var result = await axiosInstance.post('/member/login.php', data);
            commit('set_loading', false, { root: true });
            if (result.data.status === 200) {
                let promiseUserInfo  = commit('set_user_info', result.data.user);
                let promiseLoginInfo = commit('set_login_info', result.data);
                let [resultUser, resultPostUser] = await Promise.all([promiseUserInfo, promiseLoginInfo]);
                
                // commit('set_user_info', result.data.user);
                // commit('set_login_info', result.data);
                await dispatch('getListPostsByUserId', result.data.user.USERID);
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
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
            let userObj = parseJwt(tokenLocal);

            if (userObj) {
                // let resultUser = await dispatch('getUserById', userObj.id);
                // let resultPostUser = await dispatch('getListPostsByUserId', userObj.id);
                let promiseUser     = dispatch('getUserById', userObj.id);
                let promisePostUser = dispatch('getListPostsByUserId', userObj.id);

                let [resultUser, resultPostUser] = await Promise.all([promiseUser, promisePostUser]);
                if (resultUser.ok && resultPostUser.ok) {
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
    },

    async getListPostsByUserId({ commit }, userid) {
        try {
            let config = {
                params: {
                    userid
                },
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            };
            let result = await axiosInstance.get('/post/getListPostUserID.php', config);
            if (result.data.status === 200) {
                let objData = {
                    posts: result.data.posts, 
                    userid: userid
                };
                commit('set_user_posts', objData);
                return {
                    ok: true,
                    posts: result.data.posts || [],
                    error: null
                }
            }
            return {
                ok: false,
                error: null
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async register({ commit, dispatch }, data) {
        commit('set_loading', true, { root: true });
        try {
            let result = await axiosInstance.post('/member/register.php', data);
            commit('set_loading', false, { root: true });
            if (result.data.code === 200) {
                let objLoginInfo = {
                    user: result.data.user,
                    token: result.data.token
                };
                let promiseUserInfo  = commit('set_user_info', result.data.user);
                let promiseLoginInfo = commit('set_login_info', objLoginInfo);
                let [resultUser, resultPostUser] = await Promise.all([promiseUserInfo, promiseLoginInfo]);
                
                await dispatch('getListPostsByUserId', result.data.user.USERID);

                return {
                    ok: true,
                    error: null
                }
            } else {
                return {
                    ok: false,
                    data: result.data,
                    error: result.data.error
                }
            }
        } catch (error) {
            commit('set_loading', false, { root: true });
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async updateProfile({ commit }, { fullname = '', description = '', gender = '', objFile = null }) {
        commit('set_loading', true, { root: true });
        try {
            let bodyFormData = new FormData();
            bodyFormData.append('fullname', fullname); 
            bodyFormData.append('description', description); 
            bodyFormData.append('gender', gender); 

            // For avatar
            if (objFile) {
                bodyFormData.append('avatar', objFile); 
            }

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            };

            let result = await axiosInstance.post('/member/update.php', bodyFormData, config);
            commit('set_loading', false, { root: true });
            if (result.data.status === 200) {
                commit('set_current_user', result.data.user);
                return {
                    ok: true,
                    user: result.data.user,
                    error: null
                }
            }
            return {
                ok: false,
                error: result.data.error
            }
        } catch (error) {
            commit('set_loading', false, { root: true });
            return {
                ok: false,
                error: error.message
            }
        }
    }
}