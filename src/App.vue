<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  created () {
    this.$store.dispatch('initCoins')
  }
}
</script>

<style>

</style>
