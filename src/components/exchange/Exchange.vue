<template>
  <div>
    <h1>Exchange</h1>
    <el-row :gutter="10">
      <Coin 
        v-for="coin in coins"
        :key="coin.id"
        :propCoin="coin"
      />
    </el-row>
  </div>
</template>

<script>
import Coin from './Coin'

export default {
  name: 'Exchange',
  components: {
    Coin
  },
  computed: {
    coins () {
      return this.$store.getters.coins
    }
  }
}
</script>

<style>

</style>