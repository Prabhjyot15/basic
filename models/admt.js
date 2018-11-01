//var moment = require('moment');
var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");
<<<<<<< HEAD
 var MEPSchema = new mongoose.Schema({
=======
 var ADMTSchema = new mongoose.Schema({
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
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
 module.exports = mongoose.model("MEPChat", MEPSchema);
=======
    filename:String,
    createdAt:String
});
 //CNSSchema.plugin(passportLocalMongoose)
 module.exports = mongoose.model("ADMTChat", ADMTSchema);
>>>>>>> 5d7d634ca1fe544467358994d522aa1afc9a754e
