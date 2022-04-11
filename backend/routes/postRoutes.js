const {Router} = require('express')
const router = Router()
const {getPosts, createPost, getPostById} = require('../controllers/postController')

router.get('/', getPosts)
router.get('get/:id', getPostById)
router.post('/create/:communityId', createPost)


module.exports = router