const express = require('express');
const router = express.Router();

const {getTask, addTask, increaseTask, decreaseTask, deleteTask} = require('../controllers/todosController');

router.post('/addtask', addTask);
router.get('/todos', getTask);
router.put('/increase', increaseTask);
router.patch('/decrease', decreaseTask);
router.delete('/delete', deleteTask);

module.exports = router;