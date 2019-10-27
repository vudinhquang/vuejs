<template>
    <div class="row">
        <div class="col-lg-8">
            <post-list v-if="getListPosts.length" />
            <div v-else class="ass1-section__list">
                <h3>Danh sách rỗng</h3>
            </div>
        </div>
        <div class="col-lg-4">
            <sidebar />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';
export default {
    name: 'home-page',
    components: {
        PostList,
        Sidebar
    },
    watch: {
        $route(to, from) {
            var tagIndex = to.query.tagIndex;
            console.log('Home', to);
            if (tagIndex) {
                // dispatch action by category
                this.getListPostByCategory({ tagIndex: tagIndex });
            } else {
                // dispatch action by paging
                this.getListPostHasPaging({});
            }
        }
    },
    computed: {
        ...mapGetters({
            getListPosts: 'post/getListPosts'
        })
    },
    methods: {
        ...mapActions({
            getListPostHasPaging: 'post/getListPostHasPaging',
            getListPostByCategory: 'post/getListPostByCategory'
        })
    }  
}
</script>

<style>

</style>