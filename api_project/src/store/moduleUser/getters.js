import { parseJwt } from '../../helpers'

export default {
    // test: state => {
    //     return state
    // }
    isLogin: state => {
        let userObj = parseJwt(state.ACCESS_TOKEN);
        if (userObj) {
            return true;
        } else {
            return false;
        }
    },
    currentUser: state => {
        return state.currentUser;
    }
}