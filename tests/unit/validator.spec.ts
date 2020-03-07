import Validator from '@/utils/validator'

describe('Validator util', () => {
  it('validates expressions', () => {
    expect(Validator.isValid('3+2+4')).toBe(true)
    expect(Validator.isValid('+2')).toBe(true)
    expect(Validator.isValid('-2')).toBe(true)
    expect(Validator.isValid('sin(30)+cos(20)')).toBe(true)
    expect(Validator.isValid('sin(30')).toBe(false)
    expect(Validator.isValid('3++')).toBe(false)
    expect(Validator.isValid('3+')).toBe(false)
  })
})
