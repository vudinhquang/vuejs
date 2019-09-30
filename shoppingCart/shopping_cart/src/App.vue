<template>
  <div id="app">
	<div class="container">
		<comp-title />
		<div class="row">
			<product-list />
			<cart-wrapper />
		</div>
		<notifications group="noti" position="bottom right" :duration="2000" />
	</div>
  </div>
</template>

<script>
import CompTitle from './components/CompTitle';
import ProductList from './components/ProductList';
import CartWrapper from './components/CartWrapper';
export default {
	name: 'app',
		components: {
			CompTitle,
			ProductList,
			CartWrapper
		},
	data () {
		return {
		
		}
	},
	mounted() {

	} 
}
</script>

<style>
	.notifications {
		padding-right: 10px;
		padding-bottom: 10px
	}
</style>
