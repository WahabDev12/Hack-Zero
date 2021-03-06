const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var PostSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    subContent:{
        type: String,
        required: true
    },
    communityId:{
        type: Schema.Types.ObjectId,
        required: true
    }
    
})

var Post = mongoose.model("Posts", PostSchema)

module.exports = Post