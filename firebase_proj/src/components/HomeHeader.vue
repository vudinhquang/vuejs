<template>
    <header>
        <div class="container">
            <ul>
                <li><router-link to="/">Trang Chủ</router-link></li>
                <li><router-link to="/create">Tạo Task</router-link></li>
            </ul>
            <ul class="right">
                <li v-if="currentUser.email">Đăng nhập với <router-link to="/">{{ currentUser.email }}</router-link></li>
                <li><a href="/" v-on:click.prevent="handleLogout">Đăng xuất</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
import { auth } from '../config/firebase'
import { mapState } from 'vuex'
export default {
    name: 'home-header',
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['currentUser'])
    },
    methods: {
        handleLogout() {
            if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
                auth.signOut();
            }
        }
    }
}
</script>