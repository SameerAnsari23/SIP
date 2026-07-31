// function add (a, b) {
//     return a + b;
// }

// function sub (a, b) {
//     return a - b;
// }


// const add = (a, b) => {
//     return a + b;
// }

// const sub = (a, b) => {
//     return a - b;
// }


//1st way to export
// module.exports = sub;
// module.exports = add;


// 1st way to export multiple file
// export {add, sub};


// 2nd way to exports multiple file
// module.exports = {add, sub};


// 3rd way to exports multiple files
module.exports.add = (a, b) => {
    return a + b;
}

module.exports.sub = (a, b) => {
    return a - b;
}