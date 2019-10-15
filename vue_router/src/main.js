import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import AboutUs from './pages/AboutUs.vue'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

import './plugins'

Vue.use(VueRouter)

const routes = [
	{ 
		path: '/', 
		component: HomePage,
		children: [
			{
				path: '',
				component: Home
			},
			{
				path: 'about-us',
				component: AboutUs
			}
		]
	},
	// { path: '/about-us', component: AboutUs },
	{ path: '/login', component: Login }
]

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
