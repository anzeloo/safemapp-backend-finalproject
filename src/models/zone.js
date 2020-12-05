//CLASS that DEFINE ZONE SCHEMA to STORE in MONGOATLAS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZoneSchema = new Schema({
    type: {type: String, required: true},
    title: {type: String, required:true},
    description: {type: String, required: true },
    calification: {type: String, required:true},
    color: {type: String, required: true},
    level: {type: String, required: true},
    latlng: [[]]
})

module.exports = mongoose.model('Zone',ZoneSchema);