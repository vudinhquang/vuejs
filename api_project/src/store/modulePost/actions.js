import axiosInstance from '../../plugins/axios'
import { PAGE_SIZE, CURRENT_PAGE } from '../../constants'

export default {    
    async getListPostHasPaging({ commit }, { pagesize=PAGE_SIZE, currPage=CURRENT_PAGE, tagIndex = null }) {
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
                if(currPage === 1) commit('setListPosts', result.data.posts);
                else if(currPage > 1) commit('push_list_posts', result.data.posts);
            } 
        } catch (error) {
            console.error("error", error);
        }
    }
}