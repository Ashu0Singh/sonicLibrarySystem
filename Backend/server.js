const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require('mongoose');
const cors=require('cors');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const MongoDBstore=require('connect-mongodb-session')(session);
const dotenv = require('dotenv');   
//IMPORTING PACKAGES^
//<-----------------------START OF MIDDLEWARE------------------------------------>
const app=express();
app.use(cookieParser());
dotenv.config();
const store= new MongoDBstore({
    uri: process.env.URI,
    collections: process.env.COLLECTION
});
app.use(cors({
    origin:`http://localhost:${process.env.ORIGIN_PORT}`,
    credentials: true
}));
app.use(bodyParser.json());
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        secure:false,
        expires:1000*60*30
    },
        store:store
    })
);
//<------------------------END OF MIDDLEWARE------------------------------------->


app.post('/sendData',(req,res)=>{
    console.log("Endpoint 2 Working!!");
    console.log(req.body);
    res.send("O.K.");
});
app.get('/',(req,res)=>{
    console.log("Endpoint 1 Working!!");
    res.send("O.K.");
});


mongoose.connect(`mongodb://localhost:27017/ecs?retryWrites=true&w=majority`).then(result=>{
    app.listen(process.env.PORT,'192.168.137.180',()=>{
        console.log(`Server is sucessfully running on port ${process.env.PORT} !`);
});
}).catch(console.log);