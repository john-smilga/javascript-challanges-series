// Quokka.js extension
//"CMD + K + Q" - Existing File, "CMD + K + J" - New File

// odd or even

// sum(56) - ODD
// 5 + 6 = 11
// 11 % 2 = 1

// sum(745) - EVEN
// 7 + 4 + 5= 16
// 16 % 2 = 0

// const sum = (number) => {
//   const items = [...(number + '')]
//   const result = items.reduce((total, item) => {
//     return total + Number(item)
//   }, 0)
//   return result % 2 === 0 ? 'EVEN' : 'ODD'
// }

const sum = (number) =>
  [...number.toString()].reduce((total, item) => total + Number(item), 0) %
    2 ===
  0
    ? 'EVEN'
    : 'ODD'
console.log(sum(745))

// Number To String
// .toString()
// + ''

// String To Number
// parseInt - for integer
// parseFloat - for decimals
// Number - returns NaN if not a number
