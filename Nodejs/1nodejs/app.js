// console.log(process.version)
// console.log(process.platform)

// console.log(20+30);

// function add (a, b) {
//     return a + b;
// }
// add(20, 40);

const {add, sub} = require('./math')
console.log(add(45, 90), sub(80, 70))