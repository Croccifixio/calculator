import Vue from 'vue'
import Vuex from 'vuex'
import { CalculatorState, Calculation } from '@/types'
import { append, takeLast } from 'ramda'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
  } as CalculatorState,
  mutations: {
    append(state, calculation: Calculation) {
      state.history = takeLast(5)(append(calculation)(state.history))
    }
  },
  actions: {},
  modules: {},
})
