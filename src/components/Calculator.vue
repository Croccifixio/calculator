<template lang="pug">
div
  h1 Calculator
  input(
    v-model="expression"
    @keyup="evaluateExpression"
  )
  div {{ prettyValue }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { pipe } from 'ramda'
import { evaluate, validate } from '@/utils'
import { Calculation } from '@/types'

@Component
export default class HelloWorld extends Vue {
  calculation: Calculation = {
    evaluation: '',
    expression: '',
    isExpressionValid: false,
  }
  expression = ''

  evaluateExpression() {
    this.calculation = pipe(
      validate,
      evaluate
    )({ ...this.calculation, expression: this.expression })
  }

  get prettyValue() {
    const { isExpressionValid, expression, evaluation } = this.calculation

    if (expression === '') return ''
    if (!isExpressionValid) return 'ERR'
    return evaluation
  }
}
</script>

<style scoped lang="stylus"></style>
