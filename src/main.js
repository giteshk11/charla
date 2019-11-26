import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(BootstrapVue)

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: 'localhost:3000/'
  })
)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
