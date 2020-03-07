<template lang="pug">
div
  h1 Calculator
  input(v-model="calculation.expression")
  div {{ calculation.evaluation }}
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
    expression: 'sin(30) + cos(20)',
    isExpressionValid: true,
  }

  created() {
    this.calculation = pipe(validate, evaluate)(this.calculation)
  }
}
</script>

<style scoped lang="stylus"></style>
