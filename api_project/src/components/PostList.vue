<template>
    <div class="ass1-section__list">
        <post-item 
            v-for="item in getListPosts" 
            v-bind:key="item.PID" 
            v-bind:post="item"
        />
        <button 
            v-on:click="handleLoadMore"
            v-if="getListPosts && getListPosts.length" 
            class="load-more ass1-btn"><span>Xem thêm</span>
        </button>
        <h3 v-else>Danh sách rỗng</h3>
    </div>
</template>

<script>
import { PAGE_SIZE, CURRENT_PAGE } from '../constants'
import PostItem from './PostItem';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'post-list',
    data() {
        return {
            pagesize: PAGE_SIZE,
            currPage: CURRENT_PAGE,
            tagIndex: parseInt(this.$route.query.tagIndex)
        }
    },
    components: {
        PostItem
    },
    computed: {
        ...mapGetters({
            getListPosts: 'post/getListPosts'
        })
    },
    watch: {
        $route(to, from) {
            this.tagIndex = to.query.tagIndex;
            this.currPage = 1;
        }
    },
    methods: {
        ...mapActions({
            getListPostHasPaging: 'post/getListPostHasPaging'
        }),
        handleLoadMore() {
            this.currPage += 1;
            let obj = {
                pagesize: this.pagesize,
                currPage: this.currPage,
                tagIndex: this.tagIndex
            };
            this.getListPostHasPaging(obj);
        }
    }
}
</script>

<style>

</style>