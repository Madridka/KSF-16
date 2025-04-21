import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'

import "./assets/styles/normalize.css";
import "./assets/styles/styles.scss";

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router, 
  store
}).$mount('#app')
