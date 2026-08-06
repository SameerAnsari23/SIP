const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

// Database Connection
const { connectDB } = require('./config/db');
connectDB();

// Student Model
const Student = require('./models/student');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Store Data
app.post('/submit', async (req, res) => {
    try {
        const { username, age, phone, email } = req.body;

        await Student.create({
            username,
            age,
            phone,
            email
        });

        res.redirect('/thankyou');
    } catch (err) {
        console.log(err);
        res.status(500).send("Error storing data");
    }
});

// Thank You Page
app.get('/thankyou', (req, res) => {
    res.send("Thank you for submitting the form.");
});

// View All Students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching students");
    }
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});