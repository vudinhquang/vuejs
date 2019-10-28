<template>
    <div class="row">
        <div class="col-lg-8">
            <post-list />
        </div>
        <div class="col-lg-4">
            <sidebar />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
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
                this.getListPostHasPaging({ tagIndex });
            } else {
                // dispatch action by paging
                this.getListPostHasPaging({});
            }
        }
    },
    methods: {
        ...mapActions({
            getListPostHasPaging: 'post/getListPostHasPaging'
        })
    }  
}
</script>

<style>

</style>