<template>
    <b-col cols="12" lg="6">
        <form-add />

        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <input v-model="taskname" type="text" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <select v-model="level" name="ds" class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button
                v-if="!taskSelected"
                v-on:click="handleAddNew" 
                type="button" class="btn btn-primary">Submit</button>
            <button
                v-else
                v-on:click="handleEditTask" 
                type="button" class="btn btn-primary">Update</button>
            <button v-on:click="handleCancel" type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FormAdd from "./FormAdd";
import uuidv4 from "uuid/v4"
export default {
    name: 'comp-form',
    components: {
        FormAdd
    },
    props: {
        taskSelected : { type: Object, default: null }
    },
    computed: mapState(['isShowForm']),
    data() {
        return {
            taskname: '',
            level: 0
        }
    },
    watch: {
        taskSelected(newData, oldData) {
            if (newData) {
                // Người dùng có click vào button Edit
                this.taskname = newData.name;
                this.level = newData.level;
            }
        }
    },
    beforeUpdate() {

    },
    methods: {
        ...mapActions(['toggleForm', 'handleAddNewTask']),
        handleEditTask() {
            let objTaskEdit = {
                id: this.taskSelected.id,
                name: this.taskname,
                level: parseInt(this.level)
            };
            this.$emit('handleEditTaskById', objTaskEdit);
            this.handleResetData();
        },
        handleAddNew() {
            let objTask = {
                id: uuidv4(),
                name: this.taskname.trim(),
                level: parseInt(this.level)
            };
            
            if (objTask.name) {
                this.handleAddNewTask(objTask);
                this.handleCancel();
            } else {
                alert('Vui lòng nhập task name')
            }
        },
        handleCancel() {
            this.toggleForm();
            this.handleResetData();
        },
        handleResetData() {
            this.taskname = '';
            this.level = 0;
        }
    }
}
</script>

<style>

</style>