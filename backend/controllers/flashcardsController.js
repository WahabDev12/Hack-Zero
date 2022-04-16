const FlashCard = require("../models/FlashCardModel")

const createFlashCard = (req, res) => {
    console.log("route active")
    const newFlashCard = new FlashCard({
        title: req.body.title,
        visibility: req.body.visibility,
        cards: req.body.inputFields,
    })
    newFlashCard.save().then(() => {console.log("new card added")})

}



const createNew = (re,res) => {
    

}

const getFlashCardsById = (req, res) => {
    FlashCard.findOne({_id: req.params.id})
        .then((sets) => {
            res.status(200).json(sets)
        })
}


const getFlashCards = (req, res) => {
    console.log("get flashcards is active")
    FlashCard.find()
        .then((cards) => {
            res.status(200).json(cards)
        })
}



module.exports = { createFlashCard, getFlashCards, getFlashCardsById}