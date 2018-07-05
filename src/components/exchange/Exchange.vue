<template>
  <div>
    <h1>Exchange</h1>
    <el-row :gutter="10">
      <Coin 
        v-for="coin in coins"
        :key="coin.id"
        :propCoin="coin"
        :propStatus="'exchange'"
      />
    </el-row>
  </div>
</template>

<script>
import Coin from '../common/Coin'
import { mapGetters } from 'vuex'

export default {
  name: 'Exchange',
  components: {
    Coin
  },
  computed: {
    ...mapGetters([
      'coins'
    ])
  }
}
</script>

<style>

</style>