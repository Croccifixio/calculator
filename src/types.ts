export interface Calculation {
  evaluation: string
  expression: string
  isExpressionValid: boolean
}

export interface CalculatorState {
  expression: string
  history: Calculation[]
}
