var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:{
        type: Boolean,
        default: false
    }
    //,
    // profile :{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'profile'
    // }
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);