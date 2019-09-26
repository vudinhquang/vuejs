export default {
	increment({ commit, dispatch, state }, obj) {
	  console.log('actions increment ', state.value2);
	  dispatch('testABC');
	  commit('increment', obj.number);
	},
	decrement({ commit }, obj) {
	  console.log('actions decrement ', obj);
	  commit('decrement', obj.number);
	},
	testABC(context) {
	  console.log('test ABC');
	}
}