import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home')
    },
    // {
    //   path: '/classify',
    //   name: 'Classify',
    //   component: () => import('../views/Classify')
    // },
    // {
    //   path: '/rank',
    //   name: 'Rank',
    //   component: () => import('../views/Rank')
    // },
    // {
    //   path: '/update',
    //   name: 'Update',
    //   component: () => import('../views/Update')
    // },
    {
      path: '/user-detail',
      name: 'UserDetail',
      component: () => import('../views/UserDetail')
    },
    {
      path: '/admin-detail',
      name: 'AdminDetail',
      component: () => import('../views/AdminDetail')
    },
    {
      path: '/cartoon-detail',
      name: 'CartoonDetail',
      component: () => import('../views/CartoonDetail')
    },
    {
      path: '/comic',
      name: 'Comic',
      component: () => import('../views/Comic')
    },
  ]
})
