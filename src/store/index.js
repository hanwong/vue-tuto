import Vue from 'vue'
import Vuex from 'vuex'
import exchange from './modules/exchange'
import wallet from './modules/wallet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exchange,
    wallet
  }
})
