import { pipe, toString } from 'ramda'
import Validator from './validator'
import { Calculation } from '@/types'

const handleTrigFunctions = (exp: string): string => exp.replace(/(cos|sin|tan)/g, 'Math.$1')

const round = (precision: number) => (x: number): string => {
  const y = + x + (precision === undefined ? 0.5 : precision / 2)
  const z = y - (y % (precision === undefined ? 1 : + precision))

  return toString(z)
}

const trimWhiteSpace = (exp: string): string => exp.replace(/\s/g, '')

export const evaluate = (calc: Calculation): Calculation => ({
  ...calc,
  evaluation: calc.isExpressionValid
    ? pipe(
      trimWhiteSpace,
      handleTrigFunctions,
      eval,
      round(10 ** -10),
    )(calc.expression)
    : ''
})

export const validate = (calc: Calculation): Calculation => ({
  ...calc,
  isExpressionValid: pipe(trimWhiteSpace, Validator.isValid)(calc.expression),
})
