const {Router} = require('express')
const router = Router()
const {getPosts, createPost, getPostById} = require('../controllers/postController')

router.get('/', getPosts)
router.get('/:id', getPostById)
router.post('/create', createPost)


module.exports = router