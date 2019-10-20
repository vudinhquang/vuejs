<template>
	<div id="app">
		<nagivation />
		<about-us />
		<comp-footer />
	</div>
</template>

<script>
import Nagivation from './components/Nagivation'
import CompFooter from './components/CompFooter'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
export default {
	name: 'app',
	components: {
		Nagivation,
		CompFooter,
		AboutUs
	},
	data () {
		return {

		}
	}
}
</script>

<style>

</style>
