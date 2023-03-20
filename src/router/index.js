import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/test',
    name:'test',
    redirect:'/test/test1',
    component: () => import('../views/test/Test0.vue'),
    children:[
      {
        path:'test1',
        component: () => import('../views/test/Test1.vue'),
      },
      {
        path:'test2',
        component: () => import('../views/test/Test2.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
