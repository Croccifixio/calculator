import Vue from 'vue'
import Vuex from 'vuex'
import { CalculatorState, Calculation } from '@/types'
import { append, take, takeLast } from 'ramda'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    expression: '',
    history: [],
  } as CalculatorState,
  mutations: {
    appendExpression(state, exp: string) {
      state.expression = `${state.expression}${exp}`
    },
    appendHistory(state, calculation: Calculation) {
      state.history = takeLast(5)(append(calculation)(state.history))
    },
    clearExpression(state) {
      state.expression = ''
    },
    eraseExpression(state) {
      state.expression = take(state.expression.length - 1)(state.expression)
    },
    setExpression(state, exp: string) {
      state.expression = exp
    }
  },
  actions: {},
  modules: {},
})
