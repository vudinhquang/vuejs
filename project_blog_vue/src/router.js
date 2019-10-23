import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './pages/HomePage.vue'
import Contact from './pages/Contact.vue'
import Login from './pages/Login.vue'
import AboutUs from './pages/AboutUs.vue'
import BlogDetail from './pages/BlogDetail.vue'
import PageNotFound from './pages/PageNotFound.vue'

import store from './store'

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
    component: BlogDetail,
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin) {
        next();
      } else {
        next({ path: '/login', query: { redirect: 'blog-detail' } });
      }
    }
  },
	{ 
    path: '/login', 
    name: 'login',
		component: Login
  },
  {
    path: '*',
    name: 'not-found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router