<template>
    <b-col cols="12" lg="6">
        <form-add
            v-bind:isShowForm="isShowForm"
            v-on:handleToggleForm="handleToggleForm"
        />

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
                v-on:click="handleAddNew" 
                type="button" class="btn btn-primary">Submit</button>
            <button v-on:click="handleCancel" type="button" class="btn btn-secondary">Cancel</button>
        </form>
    </b-col>
</template>

<script>
import FormAdd from "./FormAdd";
import uuidv4 from "uuid/v4"
export default {
    name: 'comp-form',
    components: {
        FormAdd
    },
    props: {
        isShowForm: { type: Boolean, default: false },
        taskSelected : { type: Object, default: null }
    },
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
         
            console.log('watcher taskSelected', newData, oldData);
        }
    },
    beforeUpdate() {

    },
    methods: {
        handleAddNew() {
            let objTask = {
                id: uuidv4(),
                name: this.taskname,
                level: parseInt(this.level)
            };
            
            if (objTask.name) {
                this.$emit('handleAddNewTask', objTask);
                this.handleCancel();
            } else {
                alert('Không add được task mới mà có tên rỗng')
            }

        },
        handleToggleForm() {
            console.log('handleToggleForm CompForm.vue');
            this.$emit('toggleForm');
        },
        handleCancel() {
            this.$emit('toggleForm');
            this.handleResetData();
            // Reset Data
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