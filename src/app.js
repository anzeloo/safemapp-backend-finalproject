//CLASS SERVER -> backend & express config
//DEFINE, app requirements.
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');

const db = require('../config/mongoose');

const app = express();

const cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus:200
}
app.use(cors(corsOptions));

//import & use routes -> 2 files in routes folder
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const zoneRoutes = require('./routes/zones');

//app takes SO PORT
app.set('port', process.env.PORT || 3000);


//USE, all of that is execute before routes (Middlewares)
//morgan, to show info in console.
//urlencoded, entiende datos que entran por un form.
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRoutes);
app.use('/users', usersRoutes);
app.use('/zones', zoneRoutes);


//npm start to run backend-
//STARTING the server 
app.listen(app.get('port') , () => {
    console.log(`Server is listening in ${app.get('port')}`);
}) 
