import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up'  ,
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requireAuth = to.matched.some(record => record.meta.requireAuth);

  if (requireAuth && !currentUser) next ('login')
  else if (!requireAuth && currentUser) next ('hello')
  else next ()
})

export default router
