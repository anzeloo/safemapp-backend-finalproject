//CLASS that DEFINE USER SCHEMA to STORE in MONGOATLAS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
identification: { 
        type: {type: String, required: true} , 
        number: {type: Number, required: true}
}, 
name: {type: String, required: true},
gender: {type: String, required: true},
age: {type: Number, required: true},
neighborhood: {type: String, required: true},
email: {type: String, required: true},
password: {type: String, required: true}
});


//use the SCHEMA to STORE inside collection mongodb.
module.exports = mongoose.model('User',UserSchema);