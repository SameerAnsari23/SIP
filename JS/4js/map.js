// // map 
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => {
// return num * 2;
// });
// console.log(doubled);


// // filter
// const ages = [10, 20, 30];
// const adults = ages.filter(
//   age => age >= 18
// );
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

