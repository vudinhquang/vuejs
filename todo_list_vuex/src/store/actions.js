export default {
    changeTasks({ commit }, newTasks) {
        console.log('Actions: changeTasks', newTasks);
        commit('changeTasks', newTasks);
    }
}