import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
    // 1.Router chỉ cho phép vào khi chưa đăng nhập(Login, Register)
    if (!store.getters['user/isLogin']) {
        next(); // Cho phép vào
    } else {
        next({
            name: 'home-page',
            query: {
                redirect: to.name
            }
        });
    }
}

const ifAuthenticated = (to, from, next) => {
    // 2.Router chỉ cho phép vào khi đã đăng nhập
    if (store.getters.isLogin) {
        next(); // Cho phép vào
    } else {
        next({
            name: 'login',
            query: {
                redirect: to.name
            }
        });
    }
}

export {
    ifNotAuthenticated,
    ifAuthenticated
}