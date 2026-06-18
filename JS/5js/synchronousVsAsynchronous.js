// Js behaves Synchronously
// console.log("Morning")
// console.log("Afternoon");
// console.log("Evening");



// function greet () {
//     console.log("Hello")
// }
// greet();

// function greet2 () {
//     console.log("Hello dosto")
// }
// greet2();
// console.log("Good night")



// Js behave as Asynchronously
console.log("Morning")
console.log("Afternoon");
console.log("Evening");

setTimeout(() => {
    console.log("Samiran padhlo")
}, 3000)

setTimeout(() => {
    console.log("Sameer akhtar padhlo")
}, 1000)

let count = 8
let time = setInterval(() => {
    console.log("Bhaago bum phootne waala hai")
    console.log(count);
    count--;
    if(count < 1) {
        clearInterval(time)
        setTimeout(() => {
            console.log("Bum phoot gaya");
            // alert("Bum phoot gaya");
        }, 9000)
    }
}, 1000)


function greet () {
    console.log("Hello")
}
greet();

function greet2 () {
    console.log("Hello dosto")
}
greet2();
console.log("Good night")


