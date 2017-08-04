import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Discover from '@/components/discover'
import Orders from '@/components/orders'
import Mine from '@/components/mine'
import Menu from '@/components/menu'
import Reg from '@/components/reg'
import Filterlist from '@/components/filterlist'
import HotFood from '../components/hotFood'
import XiaDan from '@/components/xiaDan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
     {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path:'/reg',
      name:'reg',
      component:Reg
    },
    {
      path:'/filterlist',
      name:'filterlist',
      component:Filterlist
    },
    {
      path:'/hotfood',
      name:'hotfood',
      component:HotFood
    },
    // {
    //   path:'./filterNav',
    //   name:'filterNav',
    //   component:FilterNav
    // }
    {  
      path:'/XiaDan',
      name:'XiaDan',
      component:XiaDan,
      redirect:'/XiaDan'
    }
  ]
})
