<template>
  <div>
    <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" router="true" @select="handleSelect">
      <el-menu-item index="1" route="/">CryptoVue </el-menu-item>
      <el-menu-item index="2" route="/exchange">Exchange</el-menu-item>
      <el-menu-item index="3" route="/wallet">Wallet</el-menu-item>
      <el-submenu index="5" class="navbar-menu navbar-menu__right">
        <template slot="title">Save & Load</template>
        <el-menu-item index="save">Save</el-menu-item>
        <el-menu-item index="load">Load</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" class="navbar-menu navbar-menu__right">Refresh</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (event) {
      console.log(event)
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