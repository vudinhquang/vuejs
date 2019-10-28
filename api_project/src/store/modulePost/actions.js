import axiosInstance from '../../plugins/axios'

export default {    
    async getListPostHasPaging({ commit }, { pagesize=6, currPage=1, tagIndex = null }) {
        commit('set_loading', true, { root: true });
        try {
            var config = {
                    params: {
                        pagesize,
                        currPage
                    }
                };
            if (tagIndex) {
                config.params.tagIndex = tagIndex;
                var result = await axiosInstance.get('/post/getListByCategory.php', config);
            } else {
                var result = await axiosInstance.get('/post/getListPagination.php', config);
            }
            commit('set_loading', false, { root: true });
            if (result.data.status === 200) {
                commit('setListPosts', result.data.posts);
            } 
        } catch (error) {
            console.error("error", error);
        }
    }
}