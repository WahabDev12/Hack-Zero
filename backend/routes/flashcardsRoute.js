const {Router} = require('express')
const router = Router()
const {createFlashCard, getFlashCards} = require('../controllers/flashcardsController')


router.post('/', createFlashCard)
router.get('/', getFlashCards)

module.exports = router