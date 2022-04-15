const {Router} = require('express')
const router = Router()
const {createTodo, getTodoS, deleteTodo} = require('../controllers/TodoController')

router.get('/all', getTodos)
router.post('/create', createTodo)
router.delete('/delete/:id', deleteTodo)

module.exports = router;