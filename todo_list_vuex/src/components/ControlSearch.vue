<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
                v-on:input="TriggerHandleSearch"
                type="text" class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button 
                    v-on:click="handleClear"
                    class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'control-search',
    computed: mapState(['strSearch']),
    data() {
        return {

        }
    },
    methods: {
        ...mapActions(['handleSearch']),
        handleClear() {
            // Thay đổi giá trị strSearch về rỗng
            // this.$emit('handleSearch', '');
            this.handleSearch('');
        },
        TriggerHandleSearch(e) {
            this.handleSearch(e.target.value);
            // this.$emit('handleSearch', e.target.value);
        }
    }
}
</script>

<style>

</style>