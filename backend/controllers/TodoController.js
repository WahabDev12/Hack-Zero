const Todo = require('../models/TodoModel');

const getTodos = (req, res) => {
    Todo.find()
        .then((todos) => {
            res.status(200).json(todos)
    })

}

const createTodo = (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    })
    newTodo.save();
    res.status(200).send({newTodo})
}

const deleteTodo = (req, res) => {
    const todoId = Todo.findById(req.params.id);
    Todo.deleteOne({ _id: todoId});
    return res.status(200).send('Post deleted successfully')

}

module.exports = {getTodos, createTodo, deleteTodo}
