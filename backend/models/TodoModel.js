const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var todoSchema = new Schema({
    title:{
      type: String, 
      required: true
    },
    isComplete:{
        type: Boolean,
        default:false
    }

})
  
var Todo = mongoose.model("Users", todoSchema)

module.exports = Todo;