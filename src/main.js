import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router.js'
import store from './store/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(Vuex)
Vue.use(Vuelidate)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
