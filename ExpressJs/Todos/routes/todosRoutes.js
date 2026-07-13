const express = require('express');
const router = express.Router();

const {getTask, addTask, increaseTask, decreaseTask, deleteTask} = require('../controllers/todosController');

router.get('/addtask', addTask);
router.get('/todos', getTask);
router.get('/increase', increaseTask);
router.get('/decrease', decreaseTask);
router.get('/delete', deleteTask);

module.exports = router;