import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes.js'
import 'material-design-lite/dist/material.min.js'

Vue.use(VueRouter);
Vue.use(VueResource);

var version = '/api/v1/'

Vue.http.options.root = 'http://localhost:3000' + version

//Se conoce como servicio en otros frameworks
export var bus = new Vue();

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
