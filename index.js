//third party model
const express =require('express');
const app =express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const cors =require('cors');
require('dotenv/config');

const PersonsRouter =require('./PersonRoute');

//middel ware after morgan
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//middle ware 
// app.use((req,res,next)  => {
//     console.log('i am a middle ware');
//     next();
// })



app.get('/',(req,res ) =>{
res.json("hi Welcomw");
});

//PersonsRoute
app.use('/persons',PersonsRouter);


//localhost
app.listen(2000,() =>{
    console.log('server started on 2000');
    });


    //server creartion
mongoose.connect(process.env.MyDB_connection ,(err) => {
    if(err){
      
        console.log('Db error ');
    }else{
        console.log('Db connected succssfully ');

    }
});