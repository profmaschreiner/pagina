const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

// Externo
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//rotas
const index = require('./routes/index');
const apiRoute = require('./routes/apiRoute');
const userRoute = require('./routes/userRoute');
const projectsRoute = require('./routes/projectsRoute');

app.use('/', index);
app.use('/routes', apiRoute);
app.use('/users', userRoute);
app.use('/projects', projectsRoute);



module.exports = app;