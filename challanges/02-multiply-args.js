// Quokka.js extension
//"CMD + K + Q" - Existing File, "CMD + K + J" - New File

// function multiply() {
//   const args = [...arguments]
//   return args.reduce((total, item) => {
//     return item ? item * total : item + total
//   }, 1)
//   return 120
// }

const multiply = (...args) => {
  return args.reduce((total, item) => {
    return item ? item * total : item + total
  }, 1)
}

console.log(multiply(4, 5))
// 4 * 5 = 20
console.log(multiply(1, 2, 3, 5))
// 1 * 2 * 3 * 5 = 30
console.log(multiply(2, 0, 4, 2))
// 2 + 0 * 4 * 2
