import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
