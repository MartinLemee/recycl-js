import Vue from 'vue'
import VueRouter from 'vue-router'
import vueMain from '../views/vueMain.vue'
import vueDemande from '../views/vueDemande.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vuemain',
    component: vueMain
  },
  {
    path: '/listerdemande',
    name: 'listerdemande',
    component: vueDemande
  }
]

const router = new VueRouter({
  routes
})

export default router