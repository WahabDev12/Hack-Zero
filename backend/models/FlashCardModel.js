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
    },

    userId:{    
         type: Schema.Types.ObjectId
    }
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

