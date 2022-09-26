// describe('testando', () => {
//   test('teste', () => {
//     console.log('teste realizado')
//   })
// })

describe('teste', () => {
  test('é par', () => {
    expect(checkNatural(112)).toBe(false)
  })
})

const checkNatural = (num: number): boolean => {
  const result = num % 2 === 1
  return result
}
