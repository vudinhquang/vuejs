<template>
    <div>
        <user-page-infor v-bind:userInfo="userInfo" />
        <div 
            v-if="listPostOfUser && listPostOfUser.length"
            v-masonry
            column-width='.grid-sizer'
            transition-duration="0.3s" 
            item-selector=".ass1-section__item"
            class="ass1-section__wrap row ass1-section__isotope-init">
            
            <div class="grid-sizer"></div>
            
            <post-item 
                v-masonry-tile
                v-for="item in listPostOfUser"
                v-bind:key="item.PID"
                v-bind:post="item"
                class="col-lg-6"
            />
        </div>
    </div>
</template>

<script>
import PostItem from '../components/PostItem'
import UserPageInfor from '../components/UserPageInfor'

import { mapActions } from 'vuex'

export default {
    name: 'user-page',
    components: {
        UserPageInfor,
        PostItem
    },
    data() {
        return {
            userInfo: null,
            listPostOfUser: [],
            userid: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.userid = to.params.id;
            this.fetchAllData();
        }
    },
    created() {
        this.fetchAllData();
    },
    methods: {
        ...mapActions({
            set_loading: 'set_loading',  
            getUserById: 'user/getUserById',
            getListPostsByUserId: 'user/getListPostsByUserId'
        }),
        async fetchAllData() {
            this.set_loading(true, { root: true });
            let userid = this.userid;

            let promiseUser     = this.getUserById(userid);
            let promisePostUser = this.getListPostsByUserId(userid);

            let [resultUser, resultPostUser] = await Promise.all([promiseUser, promisePostUser]);
            this.set_loading(false, { root: true });
            if (resultUser.ok && resultPostUser.ok) {
                this.userInfo       = resultUser.data;
                this.listPostOfUser = resultPostUser.posts;

                // Data changed
                if (typeof this.$redrawVueMasonry === 'function') {
                    this.$redrawVueMasonry()
                }
            } else {
                this.$router.push('/');
            }
        }
    }
}
</script>

<style>

</style>