const mongoose = require("mongoose");
const Schema = mongoose.Schema


CardSchema = new Schema({
	question: String,
	answer: String,
	
})


const FlashCardSchema = new Schema({
    title:{
        type:"string",
        required: true,
    },

    visibility: {
        type:"string",
        default:"Private",
    },

    cards:[CardSchema]
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

