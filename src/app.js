//CLASS SERVER -> backend & express config
//DEFINE, app requirements.
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cookieParser = require('cookie-parser');
const app = express();

const cors = require('cors');
var corsOptions = {
    origin = '*', //here put domain, * -> everybody can access it 
    optionSuccessStatus = 200
}
app.use(cors(corsOptions));
//app takes SO PORT
app.set('port', process.env.PORT || 3000);


//USE, all of that is execute before routes (Middlewares)
app.use(morgan('dev')); //morgan, to show info in console.
app.use(express.json());
app.use(express.urlencoded({extended:false})); //urlencoded, entiende datos que entran por un form.
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//import & use routes -> 2 files in routes folder
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
app.use('/', indexRoutes);
app.use('/users', usersRoutes);


//STARTING the server 
app.listen(app.get('port') , () => {
    console.log(`Server is listening in ${app.get('port')}`);
}) 


