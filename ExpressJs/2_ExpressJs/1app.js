const { resolve4 } = require('dns');
const express = require('express')
const app = express();
const path = require('path');
const PORT = 3000;



app.get('/', (req, res) => {
    // res.send("<h1>Mehul</h1>")
    res.sendFile(path.join(__dirname, 'index.html'))
})

// Params '/about:name'
app.get('/about:student', (req, res) => {
    res.send(`<h1>Hello this side ${req.params.student}</h1>`);
})

// query Parameter  '/about?name=Jayant
app.get('/city', (req, res) => {
    // const {name} = 
    // res.send(`<h1>Hello this side ${req.query.name}, ${req.query.address}</h1>`);
    res.json({
        city: req.query.name,
        locality: req.query.address
    })
})



app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})