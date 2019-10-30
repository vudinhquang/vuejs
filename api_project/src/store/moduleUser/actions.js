import axiosInstance from '../../plugins/axios'

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
    }
}