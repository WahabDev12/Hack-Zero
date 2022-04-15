const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FlashCardSchema = new Schema({
    title:{
        type:"string",
        required: true,
    },
    
    description: {
        type:"string",
        
        
    },

    visibility: {
        type:"string",
        default:"Private",
        required: true,
    },

    cards: {
        type:"array",
    }
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

