const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

mongoose.connect('mongodb://localhost:27017/SERV',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((e)=>{
    console.log("error in connecting db",e);
    
})

const router = require('./routers/router');

const app = express();
app.use(express.json())

app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));


const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));
app.use('/',router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server is up on port : '+ port)
})