import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ChatArea from '../views/ChatArea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/chat',
    name: 'ChatArea',
    component: ChatArea
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
