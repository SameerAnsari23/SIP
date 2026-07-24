let arr = [1, 2, 4, 6, 0, 9];
console.log(arr)
arr.forEach(i => {
    console.log(i)
});

arr.push(20)
arr.push(21)
console.log("After push operation: " + arr)

arr.pop()
console.log("After pop operation: " + arr)


arr.unshift(30)
console.log("After unshift operation: " + arr)

arr.shift()
console.log("After shift operation: " + arr)

console.log(arr.indexOf(10))
console.log(arr.indexOf(9))
console.log(arr[4])

let arr2 = [11, 1, 24, 25, 6, 16];

// arr.push(arr2);
// console.log(arr);

let arr3 = [...arr, ...arr2]; // spread operator
console.log("New Array", arr3)


let cgpa = 7.09;
let cgpa2 = 7.42;
let cgpa3 = 7.54;
let cgpa4 = 8.00;
console.log(cgpa, cgpa2, cgpa3, cgpa4)