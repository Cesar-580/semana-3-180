import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Para almacenar la URl para la confirmación
const base = axios.create({
  // baseURL : 'https://glacial-everglades-74306.herokuapp.com'
  baseURL : 'http://localhost:3000/'
})
// Se dice que solo se usará http cuando se necesite usar la URL
Vue.prototype.$http = base;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
