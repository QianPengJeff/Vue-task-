import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueCarousel from 'vue-carousel';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueCarousel);

const router = new VueRouter({
  routes: Routes
});



new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
