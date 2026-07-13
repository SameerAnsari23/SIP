const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const todosRoutes = require('./routes/todosRoutes');

app.use('/', todosRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
})