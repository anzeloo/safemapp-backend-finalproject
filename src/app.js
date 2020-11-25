//ESTE ES EL SERVIDOR -> usar express e inicializarlo
const express = require('express');
const morgan = require('morgan');
const path = require('path');
var cookieParser = require('cookie-parser');
const app = express();

const cors = require('cors');
var corsOptions = {
    origin = '*',
    optionSuccessStatus = 200
}
app.use(cors(corsOptions));


//settings -> toma el puerto del SO
app.set('port', process.env.PORT || 3000);

//middlewares -> función que se ejecuta antes de llegar a las rutas.
//aquí, usamos morgan para mostrarlos por consola
//urlencoded -> entiende datos que inserta un user a través de un form. 
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//import & use routes -> los 2 archivos del folder routes
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
app.use('/', indexRoutes);
app.use('/users', usersRoutes);


//starting the server 
app.listen(app.get('port') , () => {
    console.log(`Server is listening in ${app.get('port')}`);
}) 


