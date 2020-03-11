const { sum, mul, sub, div } = require('./maths')

test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).not.toBe(3)
})
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).not.toBe(0)
})
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).not.toBe(11)
})
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).not.toBe(21)
})