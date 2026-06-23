function greet() {
    return new Promise((res, rej) => {
        let delivered = false;
        if (delivered) {
            res("Deliver ho gaya");
        }
        else {
            rej("deliver nahi hua");
        }
    })
}

// greet()
// .then((msg) => {
//     console.log(msg)
// })
// .catch((err) => {
//     console.log(err);
// })


async function print() {    
    // const msg = await greet();
    // console.log(msg);
    // console.log("hello");

    try {
        const msg = await greet();
    console.log(msg);
    console.log("hello");
    }
    catch(err) {
        console.log(err);
    }
}
// print()



// 2
function login(email, password) {
    return new Promise((res, rej) => {
        console.log("Aapke credentials verify ho rahe hai... thoda wait kre!!!!!");

        setTimeout(() => {
            if (email == "test@gmail.com"  && password == "123") {
                res({
                    id: 1,
                    name: "Test"
                })
            }
            else {
                rej("Invalid Credentials");
            }
        }, 3000)
    })
}

async function auth() {
    try{
        const data = await login("test@gmail.com", "123");
        console.log(data);
        console.log(data.name);
    }
    catch(err){
        console.log(err)
    }
}
// auth();




// 3
function loginUser() {
    return new Promise((res, rej) => {
        console.log("Aaap login ho rahe...");

        setTimeout(() => {
            console.log("Aap login ho chuke...")
            res();
        }, 4000)
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
        }, 1000)
    })
}

function payment() {
    return new Promise((res, rej) => {
        console.log("Payement process ho rahi hai");

        setTimeout(() => {
            console.log("Payment Sucessfull..🤩🤩🤗"),
            res();
        }, 1000)
    })
}

async function blinkit() {
    try {
        await loginUser();
        await getProfile();
        await getOrder();
        await payment();
    }
    catch {
        console.log("Kuch toh gadbad hai daya....")
    }
}
blinkit();