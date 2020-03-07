export interface Calculation {
  evaluation: string
  expression: string
  isExpressionValid: boolean
}

export interface CalculatorState {
  history: Calculation[]
}
