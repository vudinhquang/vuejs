export default {
    changeTasks(state, newTasks) {
        console.log('Mutations: changeTasks', newTasks);
        // console.log('localStorage', localStorage, JSON.stringify(newTasks));
        state.listTask = newTasks;
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