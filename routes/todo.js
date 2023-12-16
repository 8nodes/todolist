const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

//endpoint that retrieve all Todos from the db

router.get('/', todoController.getTodos);

//endpoint to add a Todo in the databasee

router.post ('/add',todoController.addTodo);

//endpoint that get a single to do

router.get ('/:id',todoController.getTodoByMiddleware,todoController.getOnetodo);

//endpoint that updates a single todo in the database


router.patch ('/update/:id',todoController.getTodoByMiddleware , todoController.updateTodo);


//endpoint that delete a todo from the database

router.delete ('/delete/:id', todoController.getTodoByMiddleware , todoController.deleteTodo);

module.exports = router;