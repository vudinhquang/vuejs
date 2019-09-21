<template>
	<div id="app">
		<div class="container">

			<!-- TITLE : START -->
			<div class="page-header">
				<h1>ToDo List <small>VueJs</small></h1>
				<hr class="my-4">
			</div>
			<!-- TITLE : END -->


			<div class="row">
				<!-- CONTROL (SEARCH + SORT + ADD) : START -->
				<div class="col-12 col-lg-6">
					<div class="row">
						<!-- SORT : START -->
						<div class="col-12">
							<div class="form-group">
								<b-dropdown text="Sort by">
									<b-dropdown-item>Name ASC</b-dropdown-item>
									<b-dropdown-item>Name DESC</b-dropdown-item>
									<b-dropdown-divider />
									<b-dropdown-item>Level ASC</b-dropdown-item>
									<b-dropdown-item>Level DESC</b-dropdown-item>
								</b-dropdown>
								<span class="badge badge-success badge-medium">NAME - DESC</span>
							</div>
						</div>
						<!-- SORT : END -->

						<!-- SEARCH : START -->
						<div class="col-12">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Search for..." />
								<span class="input-group-append">
									<button class="btn btn-info" type="button">Clear!</button>
								</span>
							</div>
						</div>
						<!-- SEARCH : END -->
					</div>
				</div>
				<!-- CONTROL (SEARCH + SORT + ADD) : END -->

				<!-- FORM : START -->
				<div class="col-12 col-lg-6">
					<!-- ADD : START -->
					<div class="form-group add-task">
						<button type="button" class="btn btn-info btn-block">Add Task</button>
					</div>
					<!-- ADD : END -->

					<form action="" method="POST" class="form-inline justify-content-between">
						<div class="form-group">
							<label class="sr-only" for="">label</label>
							<input type="text" class="form-control" placeholder="Task Name" />
						</div>
						<div class="form-group">
							<label class="sr-only" for="">label</label>
							<select name="ds" class="form-control" required="required">
								<option value="0">Small</option>
								<option value="1">Medium</option>
								<option value="2">High</option>
							</select>
						</div>

						<button type="button" class="btn btn-primary">Submit</button>
						<button type="button" class="btn btn-secondary">Cancel</button>
					</form>
				</div>
				<!-- FORM : END -->
			</div>

			<!-- LIST : START -->

			<div class="panel panel-success">
				<div class="panel-heading">List Task</div>
				<table class="table table-hover ">
					<thead>
						<tr>
							<th style="width: 10%" class="text-center">#</th>
							<th>Task</th>
							<th style="width: 20%" class="text-center">Level</th>
							<th style="width: 160px">Action</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td class="text-center">1</td>
							<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
							<td class="text-center"><span class="badge badge-danger">High</span></td>
							<td>
								<button type="button" class="btn btn-warning">Edit</button>
								<button type="button" class="btn btn-danger">Delete</button>
							</td>
						</tr>
						<tr>
							<td class="text-center">2</td>
							<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
							<td class="text-center"><span class="badge badge-secondary">Small</span></td>
							<td>
								<button type="button" class="btn btn-warning">Edit</button>
								<button type="button" class="btn btn-danger">Delete</button>
							</td>
						</tr>
						<tr>
							<td class="text-center">3</td>
							<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ea c</td>
							<td class="text-center"><span class="badge badge-info">Medium</span></td>
							<td>
								<button type="button" class="btn btn-warning">Edit</button>
								<button type="button" class="btn btn-danger">Delete</button>
							</td>
						</tr>
					</tbody>

				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {

		}
	},
	components: {

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
