import Vue from 'vue'

// 원화 필터링
Vue.filter('KRW', value => {
  return `₩ ${value.toLocaleString()}`
})