import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import Contact from './pages/Contact.vue'
import Login from './pages/Login.vue'
import AboutUs from './pages/AboutUs.vue'
import BlogDetail from './pages/BlogDetail.vue'

Vue.use(VueRouter)

const routes = [
	{ 
    path: '/', 
    name: 'home-page',
		component: HomePage
  },
	{ 
    path: '/contact', 
    name: 'contact',
		component: Contact
  },
	{ 
    path: '/about-us', 
    name: 'about-us',
		component: AboutUs
  },
	{ 
    path: '/blog-detail/:title/:id',
    name: 'blog-detail',
		component: BlogDetail
  },
	{ 
    path: '/login', 
    name: 'login',
		component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router