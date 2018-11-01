//var moment = require('moment');
var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");
 var IPSchema = new mongoose.Schema({
    from:String,
    image:String,
    text:String,
    url:String,
    file:String,
<<<<<<< HEAD
    fileName:String,
    createdAt:String
});
 //CNSSchema.plugin(passportLocalMongoose)
 module.exports = mongoose.model("IPChat", IPSchema);
=======
    filename:String,
    createdAt:String
});
 //CNSSchema.plugin(passportLocalMongoose)
 module.exports = mongoose.model("IPChat", IPSchema);
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
