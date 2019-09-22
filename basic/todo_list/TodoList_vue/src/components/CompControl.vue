<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <control-sort />
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
        strSearch: { type: String, default: '' }
    },
    data() {
        return {

        }
    },
    methods: {
        handleSearch(data) {
            console.log('handleSearch Compcontrol.vue', data);
            this.$emit('handleSearch', data);
        }
    }
}
</script>

<style>

</style>