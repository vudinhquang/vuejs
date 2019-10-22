<template>
	<div id="app">
		<nagivation />
		<router-view />
		<comp-footer />
	</div>
</template>

<script>
import Nagivation from './components/Nagivation'
import CompFooter from './components/CompFooter'
export default {
	name: 'app',
	components: {
		Nagivation,
		CompFooter
	},
	data () {
		return {

		}
	}
}
</script>

<style>

</style>
