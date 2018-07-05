import coins from '../../data'

const state = {
  coins: []
}

const mutations = {
  'SET_COINS' (state, coins) {
    state.coins = coins
  },
  'RND_COINS' (state) {
  }
}

const actions = {
  buyCoin: ({commit}, order) => {
    commit('BUY_COIN', order)
  },
  initCoins: ({commit}) => {
    commit('SET_COINS', coins)
  },
  randomizeCoins: ({commit}) => {
    commit('RND_COINS')
  }
}

const getters = {
  coins: state => {
    return state.coins
  }
}

export default {
  state, 
  mutations,
  actions,
  getters
}