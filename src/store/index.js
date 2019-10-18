import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: localStorage.getItem('user-token') || '',
		state: '',
		role: localStorage.getItem('user-role') || '',
	},
	getters: {
		isAuth(state) {
			return !!state.token
		},
		getRole(state){
			return state.role
		}
	},
	mutations: {
		authSuccess(state, token){
			state.token = token;
		},
		authRole(state, role){
			state.role = role;
		}
	},
	actions: {
		authReq(context, options){
			return new Promise((resolve, reject) => {
				const userList = [{
						id: 1,
						login: 'student',
						password: 'sdemo',
						role: 1
					},
					{
						id: 2,
						login: 'teacher',
						password: 'tdemo',
						role: 2
					}]

				userList.forEach(user => {
					if (user.login === options.login && user.password === options.password){
						const token = Math.random();
						localStorage.setItem('user-token', token);
						localStorage.setItem('user-role', user.role);
						context.commit('authSuccess', token);
						context.commit('authRole', user.role);
						resolve()
					}
				})
				reject()
			})
		}
	}
})
