
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;
let userSchema = mongoose.Schema({
        email_id:{
            type:String,
            required:true
        }
});

userSchema.plugin(passportLocalMongoose);// Adds An fields Like An Username,password,salt in An user model
const users  =  new mongoose.model("users",userSchema);
module.exports = users;
