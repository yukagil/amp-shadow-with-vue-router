import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes.js';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
