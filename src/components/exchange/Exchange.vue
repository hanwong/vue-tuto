<template>
  <div>
    <h1>Exchange</h1>
    <el-row :gutter="10">
      <Coin :propCoin="{id: 1, name: 'BTC', price: 700, exPrice: 725}"/>
      <Coin :propCoin="{id: 1, name: 'BTC', price: 700, exPrice: 625}"/>
      <Coin :propCoin="{id: 1, name: 'BTC', price: 700, exPrice: 700}"/>
      <Coin :propCoin="{id: 1, name: 'BTC', price: 700, exPrice: 625}"/>
      <Coin :propCoin="{id: 1, name: 'BTC', price: 700, exPrice: 625}"/>
    </el-row>
  </div>
</template>

<script>
import Coin from './Coin'

export default {
  name: 'Exchange',
  components: {
    Coin
  }
}
</script>

<style>

</style>