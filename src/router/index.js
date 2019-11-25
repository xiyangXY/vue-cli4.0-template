import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue'),
    // 路由独享的守卫
    beforeEnter: (to, from, next) => { next(); }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to);
  next();
})

// 全局后置钩子
router.afterEach((to, from) => {
  // console.log(to);
})

export default router
