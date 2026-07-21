const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")
const session = require('express-session')


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'kjdskjkjd',
    resave: false,
    saveUninitialized: true
}))


app.post('/login', (req, res) => {
   const {username} = req.body;
   req.session.cnt = 0; 
   req.session.username = username;
   req.session.isAdmin = true;
   res.redirect('/profile');
})


app.get('/login', (req, res) => {
    if (req.session.username) return res.redirect('/profile');
    res.render('login')
})


app.get('/profile', (req, res) => {
    if (!req.session.username) return res.redirect('/login');
    req.session.cnt++;
    res.render('profile', {
        username: req.session.username,
        cnt: req.session.cnt
    });    
})

app.get('/admin', (req, res) => {
    if (!req.session.isAdmin) return res.redirect('/login');
    return res.render('admin');
}) 


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})