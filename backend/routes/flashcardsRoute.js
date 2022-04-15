const {Router} = require('express')
const router = Router()
const {createFlashCard, getFlashCards, getFlashCardsById} = require('../controllers/flashcardsController')


router.post('/', createFlashCard)
router.get('/', getFlashCards)
router.get('/:id', getFlashCardsById)

module.exports = router