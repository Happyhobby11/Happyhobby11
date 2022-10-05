let max = 70
let regNum = Math.round(Math.random() * Math.floor(max)) + 1
let rowNum = Math.ceil(regNum/7)
let colNum = (regNum - 1) % 7 + 1
console.log("Registration number: " + regNum)
console.log("Row: " + rowNum)
console.log("Column: " + colNum)