export default {
    listTaskSearch: state => {
        // state.strSearch, state.listTask
			// Tìm kiếm - Logic search
			const { strSearch } = state;
			var newItems = state.listTask.filter(item => {
				return item.name.toLowerCase().includes(strSearch.toLowerCase());
			});
            console.log('Getters listTaskSearch');
			return newItems;
    }
}