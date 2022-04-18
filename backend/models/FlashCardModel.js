const mongoose = require("mongoose");
const Schema = mongoose.Schema


const FlashCardSchema = new Schema({
    title:{
        type:"string",
        required: true,
    },

    visibility: {
        type:"string",
        default:"Private",
    },

    cards:{
        type:"array",
    }
    
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

