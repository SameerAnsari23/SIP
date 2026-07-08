// const sam = require("express");
// const dam = sam();

const express = require("express");
const app = express();
const path = require('path')
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Hello Guys");
})

app.get('/gaurav', (req, res) => {
    res.send("Hello!!!!... This side aditya")
})

app.get('/mern', (req, res) => {
    // res.send("<h1 style='color: blue; background-color: red;'>Hello bro!!!!</h1>")
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})