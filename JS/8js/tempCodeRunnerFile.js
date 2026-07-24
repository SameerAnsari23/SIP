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
    catch (err) {
        console.log("Yahi hai",err);
    }
}
print()