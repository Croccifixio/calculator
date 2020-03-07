<template lang="pug">
.history
  h2 History
  ul
    li(v-for="calculation in history")
      .expression {{ calculation.expression }}
      .equals =
      .evaluation {{ calculation.evaluation }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class History extends Vue {
  get history() {
    return this.$store.state.history
  }
}
</script>

<style scoped lang="stylus">
.history
  border 2px solid #000
  position relative

h2
  background-color #000
  color #fff
  line-height 1
  margin 0
  text-transform uppercase
  text-align right

ul
  padding 0 1em 1em

li
  display flex
  justify-content flex-end

.expression
  flex-basis calc(100% - 20ch)
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
