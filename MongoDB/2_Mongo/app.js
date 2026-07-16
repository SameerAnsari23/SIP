const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path')
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const student = require('./model/student');


// app.get('/submit', async(req, res) => {
//     let {username, age, phone, email} = req.query;
//     console.log(username, age, phone, email);
//     let stu = await student.create({username, age, phone, email});
//     res.send("Data stored successfully")
// })

app.post('/submit', async(req, res) => {
    const {username, age, phone, email} = req.body;
    console.log(username, age, phone, email);
    let stu = await student.create({username, age, phone, email});
    res.redirect('/thankyou')
})

app.get('/thankyou', (req, res) => {
    res.send("Thank you for coming here");
})



mongoose.connect('mongodb://127.0.0.1:27017/form')
.then(() => {
    app.listen(PORT, () => {
        console.log('Mongodb is connected')
        console.log(`Server is running at: ${PORT}`);
    })
})
.catch((err) => {
    console.log(err);
})