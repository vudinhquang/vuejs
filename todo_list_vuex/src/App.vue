<template>
	<div id="app">
		<b-container>
			{{ count }}
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
					v-on:handleEditTaskById="handleEditTaskById"
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
import { mapState } from 'vuex'
// Import các Component
import TodoListTable from './components/TodoListTable'
import CompTitle from './components/CompTitle'
import CompControl from './components/CompControl'
import CompForm from './components/CompForm'

// Import data
// import listTask from "./mocks/tasks";

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
			listTask: null,
			isShowForm: false,
			strSearch: '',
			orderBy: 'name',
			orderDir: 'asc',
			taskSelected: null
		}
	},
    watch: {
        listTask(newTasks) {
			var tasksString = JSON.stringify(newTasks);
			localStorage.setItem('tasks', tasksString);
        }
    },
	computed: {
		...mapState([
			'count'
		]),
		listTaskSearch() {
			// Tìm kiếm - Logic search
			const { strSearch } = this;
			var newItems = this.listTask.filter(item => {
				return item.name.toLowerCase().includes(strSearch.toLowerCase());
			});

			return newItems;
		},
		listTaskSort() {
			var listTask = [...this.listTaskSearch];
			listTask.sort(this.compareSort);

			return listTask;
		}
	},
	created() {
		let tasks = localStorage.getItem('tasks');
		if (tasks) {
			this.listTask = JSON.parse(tasks);
		} else {
			this.listTask = [];
		}
	},
	methods: {
		handleEditTaskById(taskEdit) {
			let index = this.listTask.findIndex(item => item.id === taskEdit.id);

			if (index !== -1) {
				this.listTask.splice(index, 1, taskEdit);	
				this.toggleForm();
			}
		},
		handleAddNewTask(task) {
			this.listTask.push(task);
		},
		handleEdit(taskEdit) {
			this.isShowForm = true;
			this.taskSelected = taskEdit;
		},
		handleDelete(taskDelete) {
			this.listTask = this.listTask.filter(item => item.id !== taskDelete.id);
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
		},
		handleSearch(data) {
			this.strSearch = data;
		},
		toggleForm() {
			if (this.isShowForm) this.taskSelected = null;
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
