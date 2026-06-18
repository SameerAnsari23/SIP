// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


// function outer() {
//     var x = 1;
//     function inner() {
//         x++;
//         console.log(x);
//     }
//     inner();
// }
// outer();  - 2
// outer();  - 2
// outer();  - 2



// function outer() {
//     let x = 1;
//     console.log(x)
//     function inner() {
//         x++;
//         console.log(x);
//     }
//     return inner;
// }
// const ans = outer();
// ans();  - 2
// ans();  - 3
// ans();  - 4
// ans();  - 5


function grandfather() {
    var x = 1
    return function parent() {
        x++;
        return function child() {
            x++;
            console.log(x);
        }
    }
}

const ans = grandfather();
const ans1 = ans();
ans1();
ans1();
ans1();