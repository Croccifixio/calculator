<template lang="pug">
div
  h1 Calculator
  .wrapper
    input.expression(
      v-model="expression"
      @keyup="evaluateExpression"
    )
    .equals =
    .evaluation {{ prettyValue }}
  Keypad(@evaluateExpression="evaluateExpression")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { pipe } from 'ramda'
import Keypad from '@/components/Keypad.vue'
import { evaluate, validate } from '@/utils'
import { Calculation } from '@/types'

@Component({
  components: {
    Keypad,
  },
})
export default class Calculator extends Vue {
  calculation: Calculation = {
    evaluation: '',
    expression: '',
    isExpressionValid: false,
  }

  evaluateExpression() {
    const expression = this.expression
    this.calculation = pipe(
      validate,
      evaluate
    )({ ...this.calculation, expression })
  }

  get expression() {
    return this.$store.state.expression
  }

  set expression(exp: string) {
    this.$store.commit('setExpression', exp)
  }

  get prettyValue() {
    const { isExpressionValid, expression, evaluation } = this.calculation

    if (expression === '') return ''
    if (!isExpressionValid) return 'ERR'

    this.$store.commit('appendHistory', this.calculation)
    return evaluation
  }
}
</script>

<style scoped lang="stylus">
.wrapper
  align-items center
  display flex

.expression
  border 1px solid #000
  flex-basis calc(100% - 20ch)
  padding 0.3em
  text-align right

.equals
  flex-basis 1ch
  flex-shrink 0
  padding 0 1ch

.evaluation
  flex-basis 17ch
  font-weight 700
  text-align left
</style>
