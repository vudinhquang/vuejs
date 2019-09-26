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
				/>
				<comp-form 
					v-bind:taskSelected="taskSelected"
					v-on:handleAddNewTask="handleAddNewTask"
					v-on:handleEditTaskById="handleEditTaskById"
				/>
			</b-row>
			<todo-list-table 
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

			return newItems;
		},
		listTaskSort() {
			var listTask = [...this.listTaskSearch];
			listTask.sort(this.compareSort);

			return listTask;
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
