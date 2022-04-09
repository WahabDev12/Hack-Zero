const {Router} = require('express')
const router = Router()
const {getPosts, createPost} = require('../controllers/postController')

router.get('/', getPosts)
router.post('/create', createPost)

module.exports = router