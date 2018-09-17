import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'

/*Css Import*/
import 'vuetify/dist/vuetify.min.css'
import './assets/sass/app.scss'


Vue.use(vueSmoothScroll)
Vue.use(Vuetify)


new Vue({
  el: '#app',
  render: h => h(App)
})
