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
import { times } from 'ramda'
import Keypad from '@/components/Keypad.vue'
import { evaluate, validate } from '@/utils'
import { Calculation } from '@/types'

const fetchRandomNumber = async () => fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
    .then(response => response.json())
    .then(data => data)

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

  async evaluateExpression() {
    let expression = this.expression
    const validatedCalculation = validate({
      ...this.calculation,
      expression,
    })


    if (validatedCalculation.isExpressionValid) {
      const splitExpression = validatedCalculation.expression.split('RAND')
      const randomNumberCount = splitExpression.length - 1
      const randomNumbers: string[] = await Promise.all(
        times(fetchRandomNumber)(randomNumberCount)
      )

      expression = splitExpression.reduce(
        (acc, v, index) =>
          acc.includes('RAND')
            ? acc.replace('RAND', randomNumbers[index])
            : acc,
        expression
      )
    }

    const evaluatedCalculation = evaluate({
      ...validatedCalculation,
      expression,
    })

    this.calculation = evaluatedCalculation
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
  font-size 20px

.expression
  border 2px solid #000
  flex-basis calc(100% - 20ch)
  font-size 20px
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
