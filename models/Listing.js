const mongoose = require('mongoose');
let reviews = require("./Reviews");
let ListingScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
     type:String,
     deafault:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
     set:(v)=> v===""? "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" : v,
    },
    price:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    reviews:[{
       type: mongoose.Schema.Types.ObjectId,
       ref:"reviews"
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
});
// Query Middleware To Delete An Particular Documents in Relationships
ListingScheme.post("findOneAndDelete",async(Listing)=>{
    console.log(Listing);
    for(let i=0;i<Listing.reviews.length;i++){
        await reviews.findByIdAndDelete(Listing.reviews[i]);
    }
})

// Creating An Actual Collection
const listings = new mongoose.model("listings",ListingScheme);
module.exports=listings;