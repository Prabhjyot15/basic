//var moment = require('moment');
var mongoose = require("mongoose");
//var passportLocalMongoose = require("passport-local-mongoose");
 var ADMTSchema = new mongoose.Schema({
    from:String,
    image:String,
    text:String,
    url:String,
    file:String,
    filename:String,
    createdAt:String
});
 //CNSSchema.plugin(passportLocalMongoose)
 module.exports = mongoose.model("ADMTChat", ADMTSchema);
