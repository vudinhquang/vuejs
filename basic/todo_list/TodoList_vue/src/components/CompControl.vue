<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <control-sort 
                v-bind:orderBy="orderBy"
                v-bind:orderDir="orderDir"
                v-on:handleSort="handleSort"
            />
            <control-search 
                v-on:handleSearch="handleSearch"
                v-bind:strSearch="strSearch"
            />
        </div>
    </div>
</template>

<script>
import ControlSort from './ControlSort'
import ControlSearch from './ControlSearch'
export default {
    name: 'comp-control',
	components: {
		ControlSort,
		ControlSearch
    },
    props: {
        strSearch: { type: String, default: '' },
        orderBy: { type: String, default: 'name' },
        orderDir: { type: String, default: 'asc' }
    },
    data() {
        return {

        }
    },
    methods: {
        handleSearch(data) {
            console.log('handleSearch Compcontrol.vue', data);
            this.$emit('handleSearch', data);
        },
        handleSort(data) {
            console.log('handleSearch CompControl.Vue: ', data);
            this.$emit('handleSort', data);
        }
    }
}
</script>

<style>

</style>