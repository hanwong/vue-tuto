<template>
  <div>
    <h1>My Wallet</h1>
    <el-row :gutter="10">
      <Coin 
        v-for="coin in coins"
        :key="coin.id"
        :propCoin="coin"
        :propStatus="'wallet'"
      />
    </el-row>
  </div>
</template>

<script>
import Coin from '../common/Coin'

export default {
  name: 'Wallet',
  components: {
    Coin
  },
  data() {
    return {
      coins: [
        {id: 5, name: 'STEEM', price: 1800, exPrice: 1700}
      ]
    }
  }
}
</script>

<style>

</style>