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

login("test@gmal.com", "123") 
.then((userData) => {
    console.log(userData);
})
.catch((err) => {
    console.log(err)
})
