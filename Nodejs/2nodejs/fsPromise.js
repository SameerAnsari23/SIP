const fs = require("fs/promises");


/*********************Read File ******************/
// const data = fs.readFile('file.txt', 'utf-8')
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err)
// })



async function fun() {
    try{
        const data = await fs.readFile('file.txt', 'utf-8')
        console.log(data);
    }
    catch{
        console.log(err);
    }
}
// fun();




/*********************write File ******************/
let data1 = [1, 2, 4, 6, 10];
let data2 = [24, 89, 90, 78];
// fs.writeFile('file3.txt', JSON.stringify(data))
// .then(() => {
//     console.log("File create ho gayi");
// })
// .catch((err) => {
//     console.log(err);
// })


async function write() {
    try {
        const arr = await fs.writeFile('file3.txt', JSON.stringify(data));
        console.log("file created");
    }
    catch(err) {
        console.log(err)
    }
}
// write();




async function assignment() {
    try {
        const write = await fs.writeFile('file4.txt', JSON.stringify(data2));
        console.log("File4 created");

        let read3 = await fs.readFile('file3.txt', 'utf-8')
        let read4 = await fs.readFile('file4.txt', 'utf-8')

        read3 = JSON.parse(read3);
        read4 = JSON.parse(read4);
        
        let readData = [...read3, ...read4];
        console.log(readData);
        await fs.writeFile('file5', JSON.stringify(readData));
        console.log("Kaam ho gaya");
    }
    catch(err) {
        console.log(err);
    }
}
assignment()