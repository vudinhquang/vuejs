export default {
    // increment (state) {
    //     state.count++
    // }
    setListPosts(state, data) {
        state.listPosts = data;
    },
    push_list_posts(state, data) {
        state.listPosts = [...state.listPosts, ...data];
    },
    set_post_detail(state, data) {
        state.postDetail = data;
    }
}