import Vue from 'vue'
import { CONFIG_ACCESS_TOKEN } from '../../constants'
export default {
    // increment (state) {
    //     state.count++
    // }
    set_user_info(state, user) {
        console.log(state, user);
        Vue.set(state.users, user.USERID, user)
    },
    set_user_posts(state, { posts, userid }) {
        Vue.set(state.posts, userid, posts)
    },
    set_logout(state) {
        state[CONFIG_ACCESS_TOKEN] = '';
        state.currentUser = null;
        localStorage.removeItem(CONFIG_ACCESS_TOKEN);
    },
    set_login_info(state, {user = null, token = ''}) {
        localStorage.setItem(CONFIG_ACCESS_TOKEN, token);
        state[CONFIG_ACCESS_TOKEN] = token;
        state.currentUser = user
    },
    set_current_user(state, user) {
        state.currentUser = user;
    }
}