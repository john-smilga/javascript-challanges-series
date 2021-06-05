// Quokka.js extension
//"CMD + K + Q" - Existing File, "CMD + K + J" - New File

// count sequences, three numbers, first equals to third
// and middle one different, all three numbers equal does not count [4,4,4]

const first = [8, 6, 8, 6, 7, 4, 7]
// [8,6,8], [6,8,6], [7,4,7];
const second = [4, 5, 5, 7, 5, 5, 9]
// [5,7,6]
const third = [3, 3, 2, 8, 7, 6, 5]
//

// const count = (data) => {
//   return data.reduce((total, item, index) => {
//     console.log(item)
//     console.log(item === data[index + 2])
//     console.log(item !== data[index + 1])
//     const match = item === data[index + 2] && item !== data[index + 1]
//     if (match) {
//       return total + 1
//     }
//     return total
//   }, 0)
// }

const count = (data) =>
  data.reduce(
    (total, item, index) =>
      total + (item === data[index + 2] && item !== data[index + 1]),
    0
  )

count(first)
console.log(count(second))
