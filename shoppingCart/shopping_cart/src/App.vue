<template>
  <div id="app">
	<div class="container">
		<comp-title />
		<div class="row">
			<product-list />
			<cart-wrapper />
		</div>
		<notifications group="noti" position="bottom right" :duration="2000" />
		<loading :class="{ show: isLoading }" />
	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CompTitle from './components/CompTitle';
import ProductList from './components/ProductList';
import CartWrapper from './components/CartWrapper';
import Loading from './components/Loading';
export default {
	name: 'app',
		components: {
			CompTitle,
			ProductList,
			CartWrapper,
			Loading
		},
	data () {
		return {
		
		}
	},
	computed: mapState(['isLoading']),
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
