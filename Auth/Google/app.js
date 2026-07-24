const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const session = require('express-session');
// const MongoStore = require('connect-mongo');
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/' })
}))

const passport = require('./authentication/passport');
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/user'));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/profile');
    });


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});