//CLASS whose CONNECT APP with mongoatlas DB
const mongoose = require('mongoose');

let url = "mongodb+srv://anzelo:lmpvSajqPSFlVkKF@cluster0.w8lvs.mongodb.net/safemapp?retryWrites=true&w=majority";

//config
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(url);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo connection error"));

module.exports = db;