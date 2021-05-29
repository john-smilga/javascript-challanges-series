// Quokka.js extension
//"CMD + K + Q" - Existing File, "CMD + K + J" - New File
// how many days, between two dates

const date1 = new Date('May 27, 2021')
const date2 = new Date('June 4 , 2023')

const getDays = (date1, date2) => {
  const oneDay = 1000 * 60 * 60 * 24
  const time2 = date2.getTime()
  const time1 = date1.getTime()
  let time = (time2 - time1) / oneDay
  time = Math.round(Math.abs(time))
  console.log(time)
  return time
}

// const getDays = (date1, date2) =>
//   Math.round(Math.abs((date2 - date1) / (1000 * 3600 * 24)))

console.log(getDays(date1, date2))
