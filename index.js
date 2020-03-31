function isNumber(value) {
  return !isNaN(value) && value !== '' && value !== undefined
}
function isOperator(value) {
  const operator = ['+', '-', '*', '/']

  return isNumber(value) || operator.includes(value)
}

function doCalculation(items) {
  switch (items[1]) {
    case '+':
      return Number(items[0]) + Number(items[2])
    case '-':
      return Number(items[0]) - Number(items[2])
    case '*':
      return Number(items[0]) * Number(items[2])
    case '/':
      return Number(items[0]) / Number(items[2])
    default:
      return NaN
  }
}

function hazyCalculator(incoming) {
  let goodValues = []

  incoming.forEach((items) => {
    if (isOperator(items)) {
      goodValues.push(items)
    }
  })
  if (goodValues.length !== 3) return NaN

  return doCalculation(goodValues)
}

module.exports = hazyCalculator
