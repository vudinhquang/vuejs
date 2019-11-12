import axiosInstance from '../../plugins/axios'
import { PAGE_SIZE, CURRENT_PAGE, CONFIG_ACCESS_TOKEN } from '../../constants'

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
    },
    async getPostDetailById({ commit, dispatch }, postId) {
        commit('set_loading', true, { root: true });
        try {
            var result = await axiosInstance.get('/post/post.php?postid=' + postId);
            if (result.data.status === 200) {
                // Gọi tiếp sang API user
                var promiseUser = dispatch('user/getUserById', result.data.data.post.USERID, {root: true});
                var promiseComments = dispatch('getListCommentByPostId', postId);

                let [resultUser, resultComments] = await Promise.all([promiseUser, promiseComments]);

                let dataPostDetail = {
                    ...result.data.data,
                    comments: []
                };
                if (resultComments.ok) {
                    dataPostDetail.comments = resultComments.comments;
                }

                commit('set_loading', false, { root: true });
                commit('set_post_detail', dataPostDetail);
                return {
                    ok: true,
                    data: result.data.data,
                    error: null
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
    async getListPostSearch({ commit }, searchStr) {
        commit('set_loading', true, { root: true });
        try {
            var result = await axiosInstance.get('/post/search.php?query=' + searchStr);
            commit('set_loading', false, { root: true });
            if (result.data.status === 200) {
                return {
                    ok: true,
                    posts: result.data.posts
                }
            } else {
                return {
                    ok: false,
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
    async createNewPost({ commit }, { post_content = '', category = '', url_image = '', obj_image = null }) {
        commit('set_loading', true, { root: true });
        try {
            let bodyFormData = new FormData();
            bodyFormData.append('post_content', post_content); 
            bodyFormData.append('category', category); 
            bodyFormData.append('url_image', url_image); 

            if (obj_image) {
                bodyFormData.append('obj_image', obj_image);  
            }

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            };

            var result = await axiosInstance.post('/post/addNew.php', bodyFormData, config);
            commit('set_loading', false, { root: true });

            if (result.data.status === 200) {
                return {
                    ok: true,
                    data: result.data.data,
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
    },
    async getListCommentByPostId({ commit }, postid) {
        try {
            var result = await axiosInstance.get('/comment/comments.php?postid=' + postid);
            if (result.data.status === 200) {
                return {
                    ok: true,
                    comments: result.data.comments
                }
            } else {
                return {
                    ok: false,
                    // error: result.data.error
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