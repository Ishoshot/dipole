import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import NProgress from 'nprogress'
import { routes } from './routes'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//Import aos
import AOS from 'aos'
import 'aos/dist/aos.css'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@space-css/space-css/space.min.css'
import './global'
import './assets/css/init/_init.css'


/* --------------------------------- Helpers -------------------------------- */
import './helpers/filters'

/* --------------------------- Module Registration -------------------------- */
Vue.use(VueRouter)
Vue.use(NProgress)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(axios)
NProgress.configure({ easing: 'ease', showSpinner: true })

/* -------------------------- Router Configuration -------------------------- */
const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    // Start the animation of the route progress bar.
    NProgress.start()
    next()
  }
})

router.afterEach((to) => {
  if (to.name) {
    // Complete the animation of the route progress bar.
    NProgress.done()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    })
  }
}).$mount('#app')
