<template lang="pug">
#app
  History
  Calculator
  Keypad
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Calculator from './components/Calculator.vue'
import History from './components/History.vue'
import Keypad from './components/Keypad.vue'

@Component({
  components: {
    Calculator,
    History,
    Keypad,
  },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin 60px auto 0
  max-width 600px
  padding-left 15px
  padding-right 15px
</style>
