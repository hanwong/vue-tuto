import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Exchange from '@/components/exchange/Exchange'
import Wallet from '@/components/wallet/Wallet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    }
  ]
})