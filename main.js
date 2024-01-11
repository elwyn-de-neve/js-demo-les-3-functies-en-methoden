// Named function
// function addNumbers(numA, numB){
//     return numA + numB
// }

// Anonymous function
// const addNumbers = function(numA, numB){
//     return numA + numB
// }

// Arrow function
// const addNumbers = (numA, numB) => {
//     return numA + numB
// }

// Single argument
// const addNumbers = numA => {
//     return numA + 6
// }

// Direct return statement
// const addNumbers = numA => numA + 6

// const calculate = {
//     add: (numA, numB) => numA + numB,
//     subtract: (numA, numB) => numA - numB,
//     multiply: (numA, numB) => numA * numB,
//     divide: (numA, numB) => numA / numB
// }

// const output = calculate.divide(10,4)
// console.log(output)


const rollDice = (sides = 6) => Math.ceil(Math.random() * sides)


const output1 = rollDice(100)
const output2 = rollDice(100)
const output3 = rollDice(100)
const output4 = rollDice(100)
console.log(output1)
console.log(output2)
console.log(output3)
console.log(output4)








