import axiosInstance from '../../plugins/axios'

export default {
    // increment ({ commit }) {
    //     commit('increment')
    // }
    async getListPostHasPaging({ commit }, { pagesize=3, currPage=1 }) {
        console.log("getListPostHasPaging run");
        try {
            var result = await axiosInstance.get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);
            console.log("result=", result); 
        } catch (error) {
            console.error("error", error);
        }
    }
}