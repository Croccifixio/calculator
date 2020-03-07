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
    console.log(`this.$store.state.history =>`, this.$store.state.history)
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
  padding-bottom 0.15em
  text-transform uppercase

ul
  padding 0 1em 1em

li
  display flex
  font-size 18px
  justify-content flex-end

.expression
  flex-basis calc(100% - 1.5ch)
  text-align right

.equals
  flex-basis 1ch
  flex-shrink 0
  padding 0 1ch

.evaluation
  flex-basis calc(100% - 1.5ch)
  font-weight 700
  text-align left
</style>
