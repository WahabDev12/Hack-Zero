const FlashCard = require("../models/FlashCardModel")

const createFlashCard = (req, res) => {
    if(req.body.visibility == 'Private'){
        const newFlashCard = new FlashCard({
            title: req.body.title,
            description: req.body.tags,
            visibility: req.body.visibility,
            cards: req.body.cardFields,
            userId: req.body.userId
        })
        newFlashCard.save().then(() => {console.log("new card added")})
    }
    else{
        const newFlashCard = new FlashCard({
            title: req.body.title,
            description: req.body.tags,
            visibility: req.body.visibility,
            cards: req.body.cardFields,
        })
        newFlashCard.save().then(() => {console.log("new card added")})
    }
  

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