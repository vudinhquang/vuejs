<template>
    <div class="form-group add-task">
        <button
            v-if="!isShowForm"
            v-on:click="onClickAddTask"
            type="button" class="btn btn-info btn-block">Add Task</button>
        <button
            v-if="isShowForm"
            v-on:click="onClickAddTask"
            type="button" class="btn btn-primary btn-block">Close Form</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'form-add',
    data() {
        return {

        }
    },
    computed: mapState(['isShowForm']),
    methods: {
        onClickAddTask() {
            this.$emit('handleToggleForm');
        }
    }
}
</script>

<style>

</style>