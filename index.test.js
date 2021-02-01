const accountTypeChecker = require('./index')
const { typeA , typeB } = require('./mocks')

describe('should return "A" when given a balance history where the balance amount decreases by varying amounts each month', () => {
  expect(accountTypeChecker(typeA)).toEqual("B")
})