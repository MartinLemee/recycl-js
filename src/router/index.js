import Vue from 'vue'
import VueRouter from 'vue-router'
import vueMain from '../views/vueMain.vue'
import vueDemande from '../views/vueDemande.vue'
import vueInfoDemande from '../views/vueInfoDemande.vue'
import vueTypesDechet from '../views/vueTypesDechet.vue'


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
  },
  {
    path: '/infodemande',
    name: 'infodemande',
    component : vueInfoDemande
  },
  {
    path: '/listedechet',
    name: 'listedechet',
    component : vueTypesDechet
  }
  
]

const router = new VueRouter({
  routes
})

export default router