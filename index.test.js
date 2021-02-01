const accountTypeChecker = require('./index')
const { typeA , typeB, typeMixedDatesTypeA } = require('./mocks')

describe('account type checker', () => {
  it('should return "A" when given a balance history where the balance amount changes by the same amount each month.', () => {
    expect(accountTypeChecker(typeA)).toBe("A")
  })
  it('should return "B" when given a balance history where the balance amount decreases by varying amounts each month', () => {
    expect(accountTypeChecker(typeB)).toBe("B")
    expect(accountTypeChecker(typeA)).toBe("A")
  })
  it('should sort array into correct order', () => {
    expect(accountTypeChecker(typeMixedDatesTypeA)).toBe("A")
  })
  it('should throw error when argument passed is not an array', () => {
    expect(() => accountTypeChecker('this should throw an error')).toThrow()
  })
  it('should throw error when argument length is not greater than 2', () => {
    expect(() => accountTypeChecker(typeA.slice(0, 2))).toThrowError(/insufficient data, require at least three months of data/)
  })
})