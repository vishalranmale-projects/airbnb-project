const mongoose = require('mongoose');
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
    }
});

// Creating An Actual Collection
const listings = new mongoose.model("listings",ListingScheme);
module.exports=listings;