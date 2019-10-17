import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import AboutUs from './pages/AboutUs.vue'
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'
import Login from './pages/Login.vue'
import ListUser from './pages/ListUser.vue'

import './plugins'

Vue.use(VueRouter)

let isLogin = false;

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
	{ path: '/login', component: Login },
	{ 
		path: '/user/:id?', 
		name: 'user', 
		component: ListUser,
		beforeEnter (to, from, next) {
			if (isLogin) next();
			else {
				// next('/login');
				next({ path: '/login', query: { redirect: 'user' } });
			}
		}
	},
	{ path: '*', component: NotFound }
]

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	console.log("to=", to);
	console.log("from=", from);
	console.log("next=", next);
	next();
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
