import axiosInstance from '../../plugins/axios'

export default {    
    async getListPostHasPaging({ commit }, { pagesize=3, currPage=1 }) {
        try {
            var config = {
                    params: {
                        pagesize,
                        currPage
                    }
                };
            var result = await axiosInstance.get('/post/getListPagination.php', config);
            if (result.data.status === 200) {
                commit('setListPosts', result.data.posts);
            } else {
                console.log("result=", result.data.error);  
            }
        } catch (error) {
            console.error("error", error);
        }
    }
}