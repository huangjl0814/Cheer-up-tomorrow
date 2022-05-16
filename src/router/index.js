import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Hotel from '../views/Hotels.vue'
import Foods from '../views/Foods.vue'
import Shopping from '../views/Shopping.vue'
import Dfoods from '../views/Dfoods.vue'
import Loginn from '../views/Login.vue'
import Register from '../views/Register.vue'
import Gcxian from '../views/Gcxian.vue'
import Scroad from '../views/Scroad.vue'
import Lsscroad from '../views/Lsscroad.vue'
import Syscroad from '../views/Syscroad.vue'
import Xzscroad from '../views/Xzscroad.vue'
import Fdetail from '../views/Fdetail'
import Fdetailpaomo from '../views/Fdetailpaomo'
import Fdetaillp from '../views/Fdetaillp'
import Fdetailrjm from '../views/Fdetailrjm'
import Fdetailhltpm from '../views/Fdetailhltpm'
import Fdetailzg from '../views/Fdetailzg'
import Fdetailszb from '../views/Fdetailszb'
import Fdetailsjb from '../views/Fdetailsjb'
import Hdetail from '../views/Hdetail'
import Qhea from '../views/Qhea.vue'
import Scenery from '../views/Scenery'
import Sdetail from '../views/Sdetail'
import Trips from '../views/Trip'
import Orders from '../views/Orders'
import Storyyi from '../views/Storyyi'
import Storyer from '../views/Storyer'
Vue.use(VueRouter)

const routes = [
  { 
    path: '/storyyi',
    component: Storyyi
  },
  { 
    path: '/storyer',
    component: Storyer
  },
  { 
    path: '/orders',
    component: Orders
  },
  { 
    path: '/trips',
    component: Trips
  },
  { 
    path: '/sdetail',
    component: Sdetail
  },
  { 
    path: '/scenery',
    component: Scenery
  },
  { 
    path: '/qhea',
    component: Qhea
  },
  { 
    path: '/hdetail',
    component: Hdetail
  },
  { 
    path: '/fdetail',
    component: Fdetail
  },
  { 
    path: '/fdetailpaomo',
    component: Fdetailpaomo
  },
  { 
    path: '/fdetaillp',
    component: Fdetaillp
  },
  { 
    path: '/fdetailrjm',
    component: Fdetailrjm
  },
  { 
    path: '/fdetailhltpm',
    component: Fdetailhltpm
  },
  { 
    path: '/fdetailzg',
    component: Fdetailzg
  },
  { 
    path: '/fdetailszb',
    component: Fdetailszb
  },
  { 
    path: '/fdetailsjb',
    component: Fdetailsjb
  },
  { 
    path: '/road',
    component: Scroad
  },
  { 
    path: '/lsroad',
    component: Lsscroad
  },
  { 
    path: '/syroad',
    component: Syscroad
  },
  { 
    path: '/xzroad',
    component: Xzscroad
  },
  { 
    path: '/gcxian',
    component: Gcxian
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/loginn',
    component: Loginn
  },
  {
    path: '/dfoods',
    component: Dfoods
  },
  {
    path: "/shopping",
    component: Shopping
  },
  {
    path: '/foods',
    component: Foods
  },
  {
    path: '/hotels',
    component: Hotel
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
