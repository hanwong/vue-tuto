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
import { mapGetters } from 'vuex'

export default {
  name: 'Wallet',
  components: {
    Coin
  },
  computed: {
    ...mapGetters({
      'coins': 'coinWallet'
    })
  }
}
</script>

<style>

</style>