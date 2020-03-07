<template lang="pug">
#app
  History
  Calculator
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Calculator from './components/Calculator.vue'
import History from './components/History.vue'

@Component({
  components: {
    Calculator,
    History,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@font-face
  font-family Cartograph
  font-weight 400
  src url('assets/CartographCF-DemiBold.woff2') format('woff2')

@font-face
  font-family Cartograph
  font-weight 700
  src url('assets/CartographCF-HeavyItalic.woff2') format('woff2')

#app
button
input
  font-family Cartograph, Avenir, Helvetica, Arial, sans-serif

#app
  text-align center
  color #2c3e50
  margin 60px auto 0
  max-width 600px
  padding-left 15px
  padding-right 15px
</style>
