<template>
  <div>
    <el-col :span="8">
      <el-card class="coin" :class="{'my-coin': propStatus === 'wallet'}">
        <div slot="header">
          {{ propCoin.name }}
          <span 
            class="coin-change" 
            :class="{'plus': changeRate > 0, 'minus': changeRate < 0, 'no-change': changeRate == 0}"
          >
            {{ Math.abs(changeRate) }}%
          </span>
          <span class="coin-price">
            {{ propCoin.price }}
          </span>
        </div>
        <el-row
          type="flex"
          justify="space-between"
          align="middle"
        >
          <el-col :span="16">
            <el-input-number
              v-if="propStatus === 'exchange'"
              v-model.number="quantity"
              :min="0"
              :max="funds / propCoin.price"
            >
            </el-input-number>
            <el-input-number
              v-if="propStatus === 'wallet'"
              v-model.number="quantity"
              :min="0"
              :max="propCoin.quantity"
            >
            </el-input-number>
          </el-col>
          <el-col :span="6">
            <el-button 
              v-if="propStatus === 'exchange'"
              @click="buyCoin"
              :disabled="quantity === 0"
            >
              Buy
            </el-button>
            <el-button
              v-if="propStatus === 'wallet'"
              @click="sellCoin"
              :disabled="quantity === 0"
            >
              Sell
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Coin',
  props: ['propCoin', 'propStatus'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      'buyOrder': 'buyCoin',
      'sellOrder': 'sellCoin'
    }),
    buyCoin () {
      const order = {
        coinId: this.propCoin.id,
        coinPrice: this.propCoin.price,
        quantity: this.quantity
      }
      this.buyOrder(order)
      this.quantity = 0
    },
    sellCoin () {
      const order = {
        coinId: this.propCoin.id,
        coinPrice: this.propCoin.price,
        quantity: this.quantity
      }
      this.sellOrder(order)
      this.quantity = 0
    }
  },
  computed: {
    ...mapGetters([
      'funds'
    ]),
    changeRate () {
      return (((this.propCoin.price - this.propCoin.exPrice) / this.propCoin.price)*100).toFixed(2)
    }
  }
}
</script>

<style lang="scss">
.coin {
  margin-bottom: 10px;
  &.my-coin {
    .el-card__header {
      background-color: #D1E7FE;
    }
  }
  .coin-price,
  .coin-change {
    display: block;
    float: right;
  }
  .coin-change {
    padding-left: 15px;
    font-size: 13px;
    &::before {
      content: '';
      display: inline-block;
      box-sizing: border-box;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 8px solid #f06292;
      transform: translate(-5px);
    }
    &.plus {
      color: #f06292;
    }
    &.minus {
      color: #169df7ee;
      &::before {
        border-top: 8px solid #169df7ee;
        border-bottom: 5px solid transparent;
        transform: translate(-5px, 5px);
      }
    }
    &.no-change {
      color: #999;
      &::before {
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        border-left: 5px solid #999;
        border-right: 5px solid #999;
        transform: translate(-5px, -4px);
      }
    }
  }
}
.el-button {
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
</style>