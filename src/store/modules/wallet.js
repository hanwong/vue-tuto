const state = {
  funds: 10000,
  coins: []
}

const mutations = {
  'BUY_COIN'(state, {coinId, quantity, coinPrice}) {
    const record = state.coins.find(element => element.id === coinId)
    if(record) {
      record.quantity += quantity
    } else {
      state.coins.push({
        id: coinId,
        quantity: quantity
      })
    }
    state.funds -= coinPrice * quantity
  },
  'SELL_COIN'(state, {coinId, quantity, coinPrice}) {
    const record = state.coins.find(element => element.id === coinId)
    if(record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.coins.splice(state.coins.indexOf(record), 1)
    }
    state.funds += coinPrice * quantity
  }
}

const actions = {
  sellCoin ({commit}, order) {
    commit('SELL_COIN', order)
  }
}

const getters = {
  coinWallet (state, getters) {
    return state.coins.map(coin => {
      const record = getters.coins.find(element => element.id === coin.id)
      return {
        id: coin.id,
        quantity: coin.quantity,
        name: record.name,
        price: record.price,
        exPrice: record.exPrice
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}