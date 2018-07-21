<template>
  <div>
    <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" :router="true">
      <el-menu-item index="1" route="/">CryptoVue </el-menu-item>
      <el-menu-item index="2" route="/exchange">Exchange</el-menu-item>
      <el-menu-item index="3" route="/wallet">Wallet</el-menu-item>
      <el-submenu index="6" class="navbar-menu navbar-menu__right">
        <template slot="title">Save & Load</template>
        <el-menu-item index="save">Save</el-menu-item>
        <el-menu-item index="load">Load</el-menu-item>
      </el-submenu>
      <li
        class="el-menu-item navbar-menu navbar-menu__right"
        @click="refreshCoins"
      >
        Refresh
      </li>
      <li index="4" class="el-menu-item navbar-menu navbar-menu__right">총 자산: {{ funds | KRW }}</li>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  beforeMount () {
    const currentPage = this.$route.name
    switch (currentPage) {
      case 'Exchange':
        this.activeIndex = '2'
        break
      case 'Wallet':
        this.activeIndex = '3'
        break
      default:
        this.activeIndex = '1'
        break
    }
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  computed: {
    ...mapGetters([
      'funds'
    ])
  },
  methods: {
    ...mapActions([
      'randomizeCoins'
    ]),
    refreshCoins (event) {
      this.randomizeCoins()
    }
  }
}
</script>

<style lang="scss">
.navbar {
  &-menu {
    &.navbar-menu__right {
      float: right;
    }
  }
}
</style>