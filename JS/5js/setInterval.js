// setInterval(callback, delay)

// setInterval(function () {
//     console.log("Time se class me aao")
// }, 100)


// countDown Timer
// let count = 10;
// let time = setInterval(() => {
//     console.log(count);
//     count--;
//     if(count < 0) {
//         clearInterval(time);
//     }
// }, 1000)



// Digital clock 
setInterval(() => {
    let t = new Date();
    console.log(t.toLocaleTimeString())
}, 1000)