import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Index = () => import('../views/index.vue')

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/:page?', name: 'Index', component: Index }
    ]
  })
}
