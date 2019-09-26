export default {
    changeTasks(state, newTasks) {
        state.listTask = newTasks;
        // console.log('Mutations: changeTasks', newTasks);
    },
    toggleForm(state) {
        // if (this.isShowForm) this.taskSelected = null;
        console.log('Mutations toggleForm ');
        state.isShowForm = !state.isShowForm;
    },
    handleSearch(state, strSearch) {
        console.log('Mutations handleSearch', strSearch);
        state.strSearch = strSearch;
    }
}