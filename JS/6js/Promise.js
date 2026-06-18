// let connection = new Promise((res, rej) => {
//     console.log("Connect ho raha hai db se...")
//     console.log("Thoda wait kro..")
//     setTimeout(() => {
//         // console.log("Connect ho gaya🤩🤗🤗")
//         // res()
//         res("Connect ho gaya🤩🤗🤗");
//     }, 3000)

// })

// connection
// .then((msg) => {
//     console.log(msg, "Mera Promise fullfilled ho gaya hai");
// })
// .catch(() => {
//     console.log("Promise reject ho gayi....");
// })



// 2nd way
// new Promise((res, rej) => {
//     console.log("Connect ho raha hai db se...")
//     console.log("Thoda wait kro..")
//     setTimeout(() => {
//         // console.log("Connect ho gaya🤩🤗🤗")
//         // res()
//         res("Connect ho gaya🤩🤗🤗");
//     }, 3000)

// })

// .then((msg) => {
//     console.log(msg, " Mera Promise fullfilled ho gaya hai");
// })
// .catch(() => {
//     console.log("Promise reject ho gayi....");
// })




// 3rd way
function connection() {
    return new Promise((res, rej) => {
        console.log("Connect ho raha hai db se...")
        console.log("Thoda wait kro..")
        setTimeout(() => {
            // console.log("Connect ho gaya🤩🤗🤗")
            // res()
            res("Connect ho gaya🤩🤗🤗");
        }, 3000)

    })
}

connection()
    .then((msg) => {
        console.log(msg, "Mera Promise fullfilled ho gaya hai");
    })
    .catch(() => {
        console.log("Promise reject ho gayi....");
    })