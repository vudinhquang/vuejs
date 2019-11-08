<template>
    <div class="ass1-head-user" v-if="userInfo">
        <div class="ass1-head-user__content">
            <div class="ass1-head-user__image"><a href="#"><img v-bind:src="getAvatar" v-bind:alt="userInfo.fullname"></a></div>
            <div class="ass1-head-user__info">
                <div class="ass1-head-user__info-head">
                    <div class="ass1-head-user__name">
                        <span>{{ userInfo.fullname }}</span> 
                        <i><img src="/dist/fonts/emotion/svg/Verified.svg" alt="Verified"></i>
                    </div>
                    <div class="w-100"></div>
                    <a v-if="!isCurrentUser" href="#" class="ass1-head-user__btn-follow ass1-btn">Theo dõi</a>
                    
                    <template v-else>
                        <router-link 
                            v-bind:to="{ name: 'change-password', params: { id: userInfo.USERID } }" 
                            class="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</router-link>
                        <router-link 
                            v-bind:to="{ name: 'user-profile', params: { id: userInfo.USERID } }" 
                            class="ass1-head-user__btn-follow ass1-btn">Profile</router-link>
                    </template>
                </div>
                <div class="ass1-head-user__info-statistic">
                    <div class="ass1-btn-icon"><i class="icon-Post"></i><span>Bài viết: {{ countPost }}</span></div>
                    <div class="ass1-btn-icon"><i class="icon-Followers"></i><span>Theo dõi: 99999</span></div>
                    <div class="ass1-btn-icon"><i class="icon-Following"></i><span>Đang theo dõi: 999</span></div>
                </div>
                <p>{{ userInfo.description }}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'user-page-info',
    props: {
        userInfo: { type:Object, default: null },
        countPost: { type:Number, default: 0 }
    },
    computed: {
        ...mapGetters({
            currentUser: 'user/currentUser'
        }),
        isCurrentUser() {
            if (this.userInfo && this.currentUser) {
                if (this.userInfo.USERID === this.currentUser.USERID) return true;
            }
            return false;
        },
        getAvatar() {
            if (this.userInfo && this.userInfo.profilepicture) return this.userInfo.profilepicture;
            return '/dist/images/cat-1634369_1920.jpg';
        }
    }
}
</script>

<style>

</style>