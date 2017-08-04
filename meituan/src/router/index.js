import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Dingdan from '@/components/dingdan'
import MyPage from '@/components/myPage'
import Login from '@/components/login'
import meishi from '@/components/meishi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: Dingdan
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/meishi',
      name: 'meishi',
      component: meishi
    }
  ]
})
