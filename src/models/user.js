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


//coge el schema y lo usa para guardar datos dentro de una colección mongodb.
module.exports = mongoose.model('User',UserSchema);