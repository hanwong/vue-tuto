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
  buyCoins: ({commit}, order) => {
    commit()
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