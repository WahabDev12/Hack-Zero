const {Router} = require('express')
const router = Router()
const {getCommunities, createCommunity, joinCommunity, leaveCommunity} = require('../controllers/communityController')

router.get('/', getCommunities)
router.post('/create', createCommunity)
router.post('/join/:id', joinCommunity)
router.post('/leave/:id', leaveCommunity)

module.exports = router