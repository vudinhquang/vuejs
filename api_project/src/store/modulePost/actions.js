import axiosInstance from '../../plugins/axios'

export default {    
    async getListPostHasPaging({ commit }, { pagesize=6, currPage=1 }) {
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
    },
    async getListPostByCategory ({ commit }, { pagesize=6, currPage=1, tagIndex=1 }) {
        try {
            var config = {
                    params: {
                        pagesize,
                        currPage,
                        tagIndex
                    }
                };
            var result = await axiosInstance.get('/post/getListByCategory.php', config);
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