<template>
    <div class="col-12 col-lg-6">
        <div class="row">
            <control-sort 
                v-bind:orderBy="orderBy"
                v-bind:orderDir="orderDir"
                v-on:handleSort="handleSort"
            />
            <control-search />
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
        orderBy: { type: String, default: 'name' },
        orderDir: { type: String, default: 'asc' }
    },
    data() {
        return {

        }
    },
    methods: {
        handleSort(data) {
            this.$emit('handleSort', data);
        }
    }
}
</script>

<style>

</style>