<template lang="pug">
.keypad
  button.one(@click="appendExpression('sin(')") sin
  button.one(@click="appendExpression('cos(')") cos
  button.one(@click="appendExpression('tan(')") tan
  button.one(@click="appendExpression('(')") (
  button.one(@click="appendExpression(')')") )
  button.one(@click="appendExpression('7')") 7
  button.one(@click="appendExpression('8')") 8
  button.one(@click="appendExpression('9')") 9
  button.one(@click="appendExpression('*')") *
  button.one(@click="appendExpression('/')") /
  button.one(@click="appendExpression('4')") 4
  button.one(@click="appendExpression('5')") 5
  button.one(@click="appendExpression('6')") 6
  button.one(@click="appendExpression('+')") +
  button.one(@click="appendExpression('-')") -
  button.one(@click="appendExpression('1')") 1
  button.one(@click="appendExpression('2')") 2
  button.one(@click="appendExpression('3')") 3
  button.one(@click="eraseExpression") del
  button.tall(@click="evaluateExpression") =
  button.one(@click="appendExpression('RAND')") RAND
  button.one(@click="appendExpression('0')") 0
  button.one(@click="appendExpression('.')") .
  button.one(@click="clearExpression('C')") C
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class Keypad extends Vue {
  appendExpression(exp: string) {
    this.$store.commit('appendExpression', exp)
  }

  clearExpression() {
    this.$store.commit('clearExpression')
  }

  eraseExpression() {
    this.$store.commit('eraseExpression')
  }

  @Emit('evaluateExpression')
  evaluateExpression() {
    return null
  }
}
</script>

<style lang="stylus" scoped>
.keypad
  --button-size 6ch
  background-color #000
  border 2px solid #000
  display inline-grid
  grid-gap 2px
  grid-template-columns repeat(5, 1fr)
  grid-template-rows repeat(5, 1fr)
  margin-top 20px

button
  align-items center
  background-color #fff
  border 0
  box-shadow none
  cursor pointer
  display flex
  font-size 16px
  justify-content center
  outline none
  padding 0

.one
  height var(--button-size)
  width var(--button-size)

.tall
  grid-column-start 5
  grid-row-start 4
  grid-row-end 6
  width var(--button-size)
</style>
