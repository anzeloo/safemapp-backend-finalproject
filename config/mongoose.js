//configuración de la db en mongoatlas
const mongoose = require('mongoose');

//let url = aquí va la URL que me tira MONGOATLAS
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

//mongoose.connect("aquí va la url de la linea 4");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));

module.exports = db;