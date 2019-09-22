<template>
	<div id="app">
		<b-container>
			<comp-title />
			<b-row>
				<comp-control
					v-bind:orderBy="orderBy"
					v-bind:orderDir="orderDir"
					v-bind:strSearch="strSearch"
					v-on:handleSearch="handleSearch"
				/>
				<comp-form 
					v-bind:isShowForm="isShowForm"
					v-on:toggleForm="toggleForm"
				/>
			</b-row>
			<todo-list-table 
				v-bind:listTask="listTaskSearch"
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
			orderDir: 'asc'
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
		}
	},
	methods: {
		handleSearch(data) {
			this.strSearch = data;
			console.log('handleSearch App.vue', data);
		},
		toggleForm() {
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
