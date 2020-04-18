import Vue from 'vue'
import VueRouter from 'vue-router'
import vueMain from '../views/vueMain.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vuemain',
    component: vueMain
  }
]

const router = new VueRouter({
  routes
})

export default router