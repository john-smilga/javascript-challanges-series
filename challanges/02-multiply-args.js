// Quokka.js extension
//"CMD + K + Q" - Existing File, "CMD + K + J" - New File
// multiply arguments, unlimited arguments, if 0

// function multiply() {
//   const args = [...arguments]
//   const result = args.reduce((total, item) => {
//     return item ? item * total : item + total
//   }, 1)
//   return result
// }

function multiply(...args) {
  const result = args.reduce((total, item) => {
    return item ? item * total : item + total
  }, 1)
  return result
}

// multiply(2, 3, 4, 5, 6, 7)

console.log(multiply(4, 5))
// 4 * 5 = 20
console.log(multiply(1, 2, 3, 5))
// 1 * 2 * 3 * 5 = 30
console.log(multiply(2, 0, 4, 2))
// 2 + 0 * 4 * 2

//  NIFTY SOLUTIONS

// const multiply = (...args) =>
//   args.reduce((total, item) => total * (item || 1), 1)
