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
      <el-menu-item
        class="navbar-menu navbar-menu__right"
        @click="refreshCoins"
      >
        Refresh
      </el-menu-item>
      <el-menu-item index="4" class="navbar-menu navbar-menu__right">총 자산: {{ funds | KRW }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavBar',
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
    refreshCoins () {
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