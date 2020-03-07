const NUMBER_RE = '\\d+'
const OPERATOR_RE = '[\\+\\-\\*\\/]'
const PLUS_MINUS_RE = '[\\+\\-]?'
const TRIG_FN_CLOSE_RE = '\\)'
const TRIG_FN_OPEN_RE = '(cos|sin|tan)\\('
const STANDALONE_RE = `((${NUMBER_RE})|(${TRIG_FN_OPEN_RE}${NUMBER_RE}${TRIG_FN_CLOSE_RE}))`
const RE = `^${PLUS_MINUS_RE}${STANDALONE_RE}(${OPERATOR_RE}${PLUS_MINUS_RE}${STANDALONE_RE})*$`
const EXPRESSION_REGEX = new RegExp(RE)

export default class Validator {
  public static isValid(expression: string): boolean {
    return EXPRESSION_REGEX.test(expression)
  }
}
