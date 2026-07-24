// // map 
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => {
// return num * 2;
// });
// console.log(doubled);


// // filter
// const ages = [10, 20, 30];
// const adults = ages.filter((age) => {
// return age >= 18
// });
// console.log(adults);


// // reduce
// const nums = [10, 20, 30];
// const sum = nums.reduce((acc, curr) => {
// return acc + curr;
// }, 0);
// console.log(sum);

// const cart = [{price: 500}, {price: 1000}];

// const total = cart.reduce((sum, item) => {
// return sum + item.price;
// }, 0);
// console.log(total);



let arr = [-2, 3, 5, 8, -9]

// const ans = arr.map(i => i + 2);
// console.log(ans);

// const ans2 = ans.filter( i => i > 0) 
// console.log(ans2);

// const ans3 = ans2.reduce((sum, item) => sum + item);
// console.log(ans3);

const ans = arr.map(i => i + 2)
               .filter(i => i > 0)
               .reduce((sum, item) => sum + item)

console.log(ans)



const users = [
  { id: 1, name: "Alice", age: 28, isActive: true, status: "premium", monthlySpend: 150 },
  { id: 2, name: "Bob", age: 22, isActive: true, status: "basic", monthlySpend: 50 },
  { id: 3, name: "Charlie", age: 35, isActive: false, status: "premium", monthlySpend: 300 },
  { id: 4, name: "Diana", age: 31, isActive: true, status: "premium", monthlySpend: 250 },
  { id: 5, name: "Ethan", age: 19, isActive: false, status: "basic", monthlySpend: 0 }
];


const age = users.filter(user => user.age > 23);
console.log(age);

const cost = age.map(s => s.monthlySpend + 50);
console.log(cost);

const total = cost.reduce((acc, curr) => acc + curr);
console.log(total)

const t = users.filter(user => user.age > 23)
               .map(s => s.monthlySpend + 50)
               .reduce((acc, curr) => acc + curr)
console.log(t);