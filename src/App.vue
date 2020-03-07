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
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin 60px auto 0
  max-width 600px
</style>
