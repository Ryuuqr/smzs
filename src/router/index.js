import Vue from 'vue'
import VueRouter from 'vue-router'

const Dzdcy = () => import('../views/zdcy/cytx/Dzdcy.vue')
const Dzdcych = () => import('../views/zdcy/cytx/Dzdcych.vue')
const Zdcy = () => import('../views/zdcy/cytx/Zdcy.vue')
const Zdpy = () => import('../views/zdcy/cytx/Zdpy.vue')
const Gtyzb = () => import('../views/zdcy/cytx/cybj/Gtyzb.vue')
const Xcl = () => import('../views/zdcy/cytx/cybj/Xcl.vue')
const Wlky = () => import('../views/zdcy/cytx/cybj/Wlky.vue')
const Tsxdny = () => import('../views/zdcy/cytx/cybj/Tsxdny.vue')
const Xxjc = () => import('../views/zdcy/cytx/cybj/Xxjc.vue')
const Gdfz = () => import('../views/zdcy/cytx/cybj/Gdfz.vue')
const Xdzy = () => import('../views/zdcy/cytx/cybj/Xdzy.vue')
const Szxx = () => import('../views/zdcy/cytx/cybj/Szxx.vue')
const Swyy = () => import('../views/zdcy/cytx/cybj/Swyy.vue')
const jzcy = () => import('../views/zdcy/cytx/cybj/Jzcy.vue')


Vue.use(VueRouter)

const routes = [
    {
    path: '',
    redirect: '/gtyzb'
    },
    {
      path: '/dzdcy',
      component: Dzdcy,
    },
    {
      path: '/dzdcych',
      component: Dzdcych
    },
    {
      path: '/zdcy',
      component: Zdcy
    },
    {
      path: '/zdpy',
      component: Zdpy
    },
    {
      path: '/gtyzb',
      component: Gtyzb
    },
    {
      path: '/xcl',
      component: Xcl
    },
    {
      path: '/wlky',
      component: Wlky
    },
    {
      path: '/tsxdny',
      component: Tsxdny
    },
    {
      path: '/xxjc',
      component: Xxjc
    },
    {
      path: '/Gdfz',
      component: Gdfz
    },
    {
      path: '/Xdzy',
      component: Xdzy
    },
    {
      path: '/szxx',
      component: Szxx
    },
    {
      path: '/swyy',
      component: Swyy
    },
    {
      path: '/jzcy',
      component: jzcy
    },
]

const router = new VueRouter({
routes,
mode: 'history'
})

export default router