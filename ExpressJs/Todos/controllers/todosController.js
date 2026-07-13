let todos = ["dancing", "Drinking"];

const addTask = (req, res) => {
    let { work } = req.body;
    console.log(work);
    if (work != "") {
        todos.push(work);
    }
    res.send(todos);
    // res.redirect('/todos')
}

const getTask = (req, res) => {
    res.send(todos);
}


const increaseTask = (req, res) => {
    let {work} = req.body;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    if(idx > 0 && idx < todos.length) {
        let temp = todos[idx];
        todos[idx] = todos[idx-1];
        todos[idx-1] = temp;
    }
    res.send(todos);
}

const decreaseTask = (req, res) => {
    let {work} = req.body;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    if(idx >= 0 && idx < todos.length - 1) {
        let temp = todos[idx];
        todos[idx] = todos[idx+1];
        todos[idx+1] = temp;
    }
    res.send(todos);
}


const deleteTask = (req, res) => {
    let {work} = req.body;
    console.log(work);
    let idx = todos.indexOf(work);
    console.log(idx);
    todos.splice(idx, 1);
    res.send(todos);
}

module.exports = {getTask, addTask, increaseTask, decreaseTask, deleteTask};