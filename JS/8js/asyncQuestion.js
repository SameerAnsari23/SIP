function verifyNumber(num) {
    return new Promise((res, rej) => {
        console.log("Aapka number verify ho raha hai... kripya pratiksha");
        setTimeout(() => {
            if (num == 9617983781) {
                console.log("Number Verified, OTP sent to your 📱")
                res(87347);
            }
            else {
                rej("Invalid Phone number")
            }
        }, 2000)
    })
}

function verifyOTP(userOTP, actualOTP) {
    return new Promise((res, rej) => {
        console.log("Aapka otp verify ho raha hai... kripya saiyam");
        setTimeout(() => {
            if (userOTP == actualOTP) {
                console.log("Aapka Swagat hai hamare pariwar")
                res();
            }
            else {
                rej("Aap Paraye ho")
            }
        }, 2000)
    })
}

async function login() {
    try {
        const otp = await verifyNumber(9617983781)
        // console.log(otp);
        const welcome = await verifyOTP(1898, otp);
    }
    catch(err) {
        console.log(err)
    }
}
login()