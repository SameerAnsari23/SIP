// function greet() { 
//     console.log("Hello"); 
// }
// function processUser(callback) {
//     callback(); 
// }
// processUser(greet);


// function greet() { 
//     console.log("Hello"); 
// }
// function processUser(callback, name) {
//     callback(); 
//     return name;
// }
// processUser(greet, "Pavani");
// console.log(processUser(greet, "Pavani"))



function paymentSuccess(){
    console.log("Payment Successfull")
}

function paymentProcessing(amount, msg) {
    console.log(`${amount} amt deducted from your account`);
    msg();
}

// paymentProcessing(12000, paymentSuccess);



const products = [
    {
        id: 1,
        name: "laptop",
        price: 700000000
    },
    {
        id: 2,
        name: "Samsung Galaxy 26 ultra",
        price: 1350000
    },
    {
        id: 3,
        name: "Bonkers",
        price: 2000
    },
    {
        id: 4,
        name: "Milton Bottle",
        price: 1400
    }
]

// console.log(products);
// console.log(products[0].id)
products.forEach(i => {
    console.log(i.id, i.name, i.price)
});
