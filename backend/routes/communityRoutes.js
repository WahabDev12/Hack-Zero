const {Router} = require('express')
const router = Router()
const {getCommunities, createCommunity} = require('../controllers/communityController')

router.get('/', getCommunities)
router.post('/create', createCommunity)

module.exports = router