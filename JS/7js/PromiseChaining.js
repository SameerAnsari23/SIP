// function login(email, password) {
//     return new Promise((res, rej) => {
//         console.log("Aapke credentials verify ho rahe hai... thoda wait kre!!!!!");

//         setTimeout(() => {
//             if (email == "test@gmail.com"  && password == "123") {
//                 res({
//                     id: 1,
//                     name: "Test"
//                 })
//             }
//             else {
//                 rej("Invalid Credentials");
//             }
//         }, 3000)
//     })
// }

// login("test@gmail.com", "123") 
// .then((userData) => {
//     // console.log(userData);
//     return userData;
// })
// .then((data) => {
//     console.log(data)
//     return data.name
// })
// .then((info) => {
//     console.log(info)
// })
// .catch((err) => {
//     console.log(err)
// })



// function loginUser(profile) {
//     console.log("Aaap login ho rahe...");

//     setTimeout(() => {
//         console.log("Aap login ho chuke...")
//     }, 1000)
//     profile();
// }

// function getProfile(order) {
//     console.log("Aaapki profile fetched ho rahi hai...");

//     setTimeout(() => {
//         console.log("Aap Profile fetch ho chuki hai...")
//     }, 1000)
//     order();
// }

// function getOrder(pay) {
//     console.log("Aapka order ready ho raha hai 🍔🍟🧁...");

//     setTimeout(() => {
//         console.log("Aapka order ready ho chuka hai 🍔🍟🧁")
//     }, 1000)
//     pay();
// }

// function payment() {
//     console.log("Payement process ho rahi hai");

//     setTimeout(() => {
//         console.log("Payment Sucessfull..🤩🤩🤗")
//     }, 1000)
// }


// loginUser(() => {
//     getProfile(() => {
//         getOrder(() => {
//             payment();
//         })
//     });
// })




function loginUser() {
    return new Promise((res, rej) => {
        console.log("Aaap login ho rahe...");

        setTimeout(() => {
            console.log("Aap login ho chuke...")
            res();
        }, 1000)
    })
}

function getProfile() {
    return new Promise((res, rej) => {
        console.log("Aaapki profile fetched ho rahi hai...");

        setTimeout(() => {
            console.log("Aapki Profile fetch ho chuki hai...")
            res();
        }, 2000)
    })
}

function getOrder() {
    return new Promise((res, rej) => {
        console.log("Aapka order ready ho raha hai 🍔🍟🧁...");

        setTimeout(() => {
            console.log("Aapka order ready ho chuka hai 🍔🍟🧁")
            res();
        }, 4000)
    })
}

function payment() {
    return new Promise((res, rej) => {
        console.log("Payement process ho rahi hai");

        setTimeout(() => {
            console.log("Payment Sucessfull..🤩🤩🤗"),
            res();
        }, 6000)
    })
}


loginUser()
.then(() => {
    getProfile
    // return getProfile
})
.then(() => {
    getOrder
    // return getOrder
})
.then((payment) => {
    return payment
})
.catch((err) => {
    console.log("Kuch toh gadbad hai daya....")
})
