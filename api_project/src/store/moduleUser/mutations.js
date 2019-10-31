import Vue from 'vue'
export default {
    // increment (state) {
    //     state.count++
    // }
    set_user_info(state, user) {
        console.log(state, user);
        Vue.set(state.users, user.USERID, user)
    },
    set_logout(state) {
        state.ACCESS_TOKEN = '';
        state.currentUser = null;
        localStorage.removeItem('ACCESS_TOKEN');
    },
    set_login_info(state, {user = null, token = ''}) {
        localStorage.setItem('ACCESS_TOKEN', token);
        state.ACCESS_TOKEN = token;
        state.currentUser = user
    }
}