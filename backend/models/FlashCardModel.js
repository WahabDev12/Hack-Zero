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

<<<<<<< HEAD
    cards: {
        type:"array",
    },

    userId:{    
         type: Schema.Types.ObjectId
    }
=======
    cards:[CardSchema]
>>>>>>> 997cd7d3166086750dee7d9fd4a41e8a4cc57366
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

