const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('./mongo');

const user = new mongoose.Schema({
    userId : Number,
    name : String,
    phone : String,
    email : String,
    age : Number,
    createdBy : String,
    createdOn : { type : Date, default : Date.now},
    updatedBy : String,
    updatedOn : { type : Date, default : Date.now}
});

user.plugin(autoIncrement.plugin, {model : 'user', field : 'userId', startAt : 1 }); 
module.exports = mongoose.model('user', user);