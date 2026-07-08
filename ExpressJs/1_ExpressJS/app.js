const express = require("express");
const app = express();
const path = require('path')
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'public')))

// request
// 1 params
app.get('/student:name', (req, res) => {
    res.send(`Hello this side ${req.params.name}. student of sage university`)
})

app.get('/city:name', (req, res) => {
    res.send(`${req.params.name} is the Best City in the world`)
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
