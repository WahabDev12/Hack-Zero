const FlashCard = require("../models/FlashCardModel")

const createFlashCard = (req, res) => {
<<<<<<< HEAD
    console.log("route active")
    const newFlashCard = new FlashCard({
        title: req.body.title,
        visibility: req.body.visibility,
        cards: req.body.inputFields,
    })
    newFlashCard.save().then(() => {console.log("new card added")})
=======
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
  
>>>>>>> 859ea613215972a5b657cc48c9882f0b81c9d08c

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