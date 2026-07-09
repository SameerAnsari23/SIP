const express = require('express')
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

app.get('/submit', (req, res) => {
    // res.send("hello")
    // res.send(`My name is ${req.query.username} and my city is ${req.query.city}`)

    const { username, city } = req.query;
    res.send(`My name is ${username} and my city is ${city}`)
})

app.post('/submit', (req, res) => {
    // res.send("hello")
    // res.send(`My name is ${req.query.username} and my city is ${req.query.city}`)

    const { username, city } = req.body;
    res.send(`My name is ${username} and my city is ${city}`)
})

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})