export default {
    changeTasks(state, newTasks) {
        state.listTask = newTasks;
        console.log('Mutations: changeTasks', newTasks);
    },
    toggleForm(state) {
        if (state.isShowForm) state.taskSelected = null;
        // console.log('Mutations toggleForm ');
        state.isShowForm = !state.isShowForm;
    },
    handleSearch(state, strSearch) {
        // console.log('Mutations handleSearch', strSearch);
        state.strSearch = strSearch;
    },
    handleSort(state, data) {
        // console.log('Mutations handleSort', data);
        state.orderBy = data.orderBy;
        state.orderDir = data.orderDir;
    },
    handleAddNewTask(state, task) {
        state.listTask.push(task);
    },
    handleEdit(state, taskEdit) {
        state.isShowForm = true;
        state.taskSelected = taskEdit;
    }
}