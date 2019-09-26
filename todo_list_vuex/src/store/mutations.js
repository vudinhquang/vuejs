export default {
    changeTasks(state, newTasks) {
        state.listTask = newTasks;
        console.log('Mutations: changeTasks', newTasks);
    }
}