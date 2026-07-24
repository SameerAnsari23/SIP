// setInterval(() => {
//     let t = new Date();
//     console.log(t.toLocaleTimeString())
// }, 1000)


// setTimeout(() => {
//     console.log("Chale party krne")
// }, 4000);

// setTimeout(() => {
//     console.log("Kaha chalna??");
// }, 7000)




setTimeout(() => {
    console.log("Chale party krne")
    setTimeout(() => {
        console.log("Kaha chalna??");
        setTimeout(() => {
            console.log("Ladakh");
            setTimeout(() => {
                console.log("Nahi Nahi... Lakshdweep chalte hai");
            }, 1000)
        }, 3000)
    }, 1000)
}, 1000);