import store from '@/store/index.js' 
import VueRouter from 'vue-router'

const isNotAuth = (to, from, next) => {
	if (!store.getters.isAuth) {
		next()
		return
	}
	next('/')
}
const isAuth = (to, from, next) => {
	if (store.getters.isAuth) {
		next()
		return
	}
	next('/login')
}

export default new VueRouter({
  mode: 'history',
  routes: [
  {
    path: '',
    component: () => import('./views/Home.vue'),
    beforeEnter: isAuth
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue'),
    beforeEnter: isNotAuth
  }]
})