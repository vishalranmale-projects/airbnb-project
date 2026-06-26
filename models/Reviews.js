const { date } = require("joi");
const { default: mongoose } = require("mongoose")

let reviewSchema = mongoose.Schema({
    comment:String,
    rating:{
        type:Number,
         default:1,
        min:0,
        max:5,
       
    },
    created_At:{
        type:Date,
        default:Date.now
    },
    author:{
        type:mongoose.Schema.ObjectId,
        ref:"users",
        required:true
    }
});

module.exports = new mongoose.model("reviews",reviewSchema);