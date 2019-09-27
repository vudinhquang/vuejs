<template>
    <div class="card panel-success">
        <div class="card-header">List Task</div>
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%" class="text-center">Level</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listTask.length !== 0">
                <todo-list-item 
                    v-for="(task, index) in listTask" 
                    v-bind:key="task.id" 
                    v-bind:task="task"
                    v-bind:index="index + 1"
                    v-on:handleEdit="handleEdit"
                />
            </tbody>

            <tbody v-else>
                <tr>
                    <td colspan="4">List Empty</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import TodoListItem from './TodoListItem'

export default {
    name: 'todo-list-table',
    components: {
        TodoListItem
    },
    data() {
        return {

        }
    },
    watch: {
        // listTask(newTasks) {
		// 	var tasksString = JSON.stringify(newTasks);
		// 	localStorage.setItem('tasks', tasksString);
        // }
    },
    computed: {
        ...mapGetters({
            'listTask': 'listTaskSearchSort' 
        })
    },
	created() {
        let tasks = localStorage.getItem('tasks') || '[]';
        // console.log('created TodoListTable.vue', JSON.parse(tasks));
        this.changeTasks(JSON.parse(tasks));
	},
    methods: {
        ...mapActions(['changeTasks']),
        handleEdit(taskEdit) {
            this.$emit('handleEdit', taskEdit);
        }
    }
}
</script>

<style>

</style>