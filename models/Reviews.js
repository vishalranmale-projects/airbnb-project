const { date } = require("joi");
const { default: mongoose } = require("mongoose")

let reviewSchema = mongoose.Schema({
    comment:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    created_At:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = new mongoose.model("reviews",reviewSchema);