export default {
    listTaskSearchSort: state => {
        // state.strSearch, state.listTask
		// Tìm kiếm - Logic search
		const { strSearch } = state;
		var newItems = state.listTask.filter(item => {
			return item.name.toLowerCase().includes(strSearch.toLowerCase());
		});

		// Sort
		var listTask = [...newItems];
		listTask.sort(function(a, b) {
			var numberSort = state.orderDir === 'asc' ? -1 : 1;

			if (state.orderBy === 'name') {
				var nameA = a[state.orderBy].toUpperCase(); // ignore upper and lowercase
				var nameB = b[state.orderBy].toUpperCase(); // ignore upper and lowercase
			} else {
				var nameA = a[state.orderBy];
				var nameB = b[state.orderBy];
			}

			if (nameA < nameB) {
				return numberSort;
			}
			if (nameA > nameB) {
				return -1 * numberSort;
			}

			return 0;
		});

		return listTask;
    }
}