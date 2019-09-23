<template>
	<div id="app">
		<b-container>
			<comp-title />
			<b-row>
				<comp-control
					v-bind:orderBy="orderBy"
					v-bind:orderDir="orderDir"
					v-bind:strSearch="strSearch"
					v-on:handleSort="handleSort"
					v-on:handleSearch="handleSearch"
				/>
				<comp-form 
					v-bind:isShowForm="isShowForm"
					v-bind:taskSelected="taskSelected"
					v-on:toggleForm="toggleForm"
					v-on:handleAddNewTask="handleAddNewTask"
				/>
			</b-row>
			<todo-list-table 
				v-bind:listTask="listTaskSort"
				v-on:handleEdit="handleEdit"
				v-on:handleDelete="handleDelete"
			/>
		</b-container>
	</div>
</template>

<script>
// Import các Component
import TodoListTable from './components/TodoListTable'
import CompTitle from './components/CompTitle'
import CompControl from './components/CompControl'
import CompForm from './components/CompForm'

// Import data
import listTask from "./mocks/tasks";

export default {
	name: 'app',
	components: {
		CompForm,
		CompTitle,
		CompControl,
		TodoListTable
	},
	data () {
		return {
			listTask: listTask,
			isShowForm: false,
			strSearch: '',
			orderBy: 'name',
			orderDir: 'asc',
			taskSelected: null
		}
	},
	computed: {
		listTaskSearch() {
			// Tìm kiếm - Logic search
			const { strSearch } = this;
			var newItems = this.listTask.filter(item => {
				return item.name.toLowerCase().includes(strSearch.toLowerCase());
			});

			// var newItems = [];
			// this.listTask.forEach((item, index) => {
			// 	let lowerName = item.name.toLowerCase();
			// 	let lowerSubString = strSearch.toLowerCase();
			// 	if (lowerName.includes(lowerSubString)) newItems.push(item);
			// });

			return newItems;
		},
		listTaskSort() {
			var listTask = [...this.listTaskSearch];
			listTask.sort(this.compareSort);

			return listTask;
		}
	},
	methods: {
		handleAddNewTask(task) {
			this.listTask.push(task);
			console.log('handleAddNewTask App.vue', task);
		},
		handleEdit(taskEdit) {
			this.isShowForm = true;
			this.taskSelected = taskEdit;
			console.log('handleEdit App.vue', taskEdit);
		},
		handleDelete(taskDelete) {
			this.listTask = this.listTask.filter(item => item.id !== taskDelete.id);

			console.log('handleDelete App.vue', taskDelete);
		},
		compareSort(a, b) {
			var numberSort = this.orderDir === 'asc' ? -1 : 1;

			if (this.orderBy === 'name') {
				var nameA = a[this.orderBy].toUpperCase(); // ignore upper and lowercase
				var nameB = b[this.orderBy].toUpperCase(); // ignore upper and lowercase
			} else {
				var nameA = a[this.orderBy];
				var nameB = b[this.orderBy];
			}

			if (nameA < nameB) {
				return numberSort;
			}
			if (nameA > nameB) {
				return -1 * numberSort;
			}

			return 0;
		},	

		handleSort(data) {
			this.orderBy = data.orderBy;
			this.orderDir = data.orderDir;
			console.log('handleSort App.vue: ', data);
		},
		handleSearch(data) {
			this.strSearch = data;
			console.log('handleSearch App.vue', data);
		},
		toggleForm() {
			if (this.isShowForm) this.taskSelected = null;
			// Nếu Form đang bật -> isShowForm = true -> Thay đổi lại là false
			// Nếu Form đang ẩn -> isShowForm = false -> Thay đổi lại là true
			console.log('toggleForm App.vue');
			this.isShowForm = !this.isShowForm;
		}
	}
}
</script>

<style>
body {
    padding: 100px 0;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}

.container > .row {
    margin-top: 20px;
    margin-bottom: 30px;
}

span.badge-medium {
	padding: 11px 10px;
    margin: 0px 8px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}

@media (max-width: 992px) {
    .add-task {
        margin-top: 50px;
    }
}

</style>
