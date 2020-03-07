<template lang="pug">
.keypad
  button.one sin
  button.one cos
  button.one tan
  button.one (
  button.one )
  button.one 7
  button.one 8
  button.one 9
  button.one *
  button.one /
  button.one 4
  button.one 5
  button.one 6
  button.one +
  button.one -
  button.one 1
  button.one 2
  button.one 3
  button.one del
  button.two =
  button.one AC
  button.one C
  button.one 0
  button.one .
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Keypad extends Vue {}
</script>

<style lang="stylus" scoped>
.keypad
  --button-size 8ch
  background-color #000
  border 2px solid #000
  display inline-grid
  grid-gap 2px
  grid-template-columns repeat(5, 1fr)
  grid-template-rows repeat(5, 1fr)

button
  align-items center
  background-color #fff
  border 0
  box-shadow none
  display flex
  justify-content center
  outline none
  padding 0

.one
  height var(--button-size)
  width var(--button-size)

.two
  grid-column-start 5
  grid-row-start 4
  grid-row-end 6
  width var(--button-size)
</style>
