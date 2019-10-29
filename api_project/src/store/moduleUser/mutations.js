import Vue from 'vue'
export default {
    // increment (state) {
    //     state.count++
    // }
    set_user_info(state, user) {
        console.log(state, user);
        Vue.set(state.users, user.USERID, user)
    }
}