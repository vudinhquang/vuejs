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
    }
}