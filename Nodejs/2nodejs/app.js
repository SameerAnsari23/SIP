const { error } = require('console');
const fs = require('fs');
// const file = __dirname 
// console.log("filname", __filename)
// console.log("dirname",file);


/****************************Read File**********************/

// synchronous
// console.log("Starting");
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);

// console.log("mid");
// console.log("ending");


// Asynchronous
console.log("starting");
fs.readFile('file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    else {
        console.log(data);
    }
})

console.log("mid");
console.log("ending");



/****************************write File**********************/

let data = {
    batch: 24,
    course: "BCA",
    date: Date.now()
}
// Synchronous
fs.writeFileSync('file.txt', "Jishan dhayaan de lo");


// Asynchronous
fs.writeFile('file1.txt', JSON.stringify(data), (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("file created");
})



// Append Data
fs.appendFileSync("notes.txt", "\nNew Line Added");


// Delete File
fs.unlinkSync("notes.txt");


// Create Directory
fs.mkdirSync("students");


// Read Directory Contents
const files =
fs.readdirSync("./");
console.log(files);
