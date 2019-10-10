import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    component: Login,
    meta: { auth: false }
  }
]

export default new VueRouter({
  routes
})
