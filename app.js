
//Basic library import
const express=require('express');
const Routes=require('./src/Routes/api');
const bodyParser=require('body-parser');
const path=require('path');
const app=new express();



//security middleWAre lib import
const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitizer=require('express-mongo-sanitize');
const hpp=require('hpp');
const cors=require('cors');

//Database lib import
const mongoose=require('mongoose');


//Security Models Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitizer());
app.use(hpp());

//Body parser Implement
app.use(bodyParser.json());

//request Rate Limit
const limiter=rateLimit(
    {
        windows:15*60*1000
        ,max:100
    })
app.use(limiter);

//Mongodb Database connection

let URI = "mongodb://127.0.0.1:27017/school";
let OPTION = { user: '', pass: '' };
// MongoDB Database connection
mongoose.connect(URI, OPTION)
    .then(() => {
        console.log("Connection Success");
    })
    .catch((error) => {
        console.error("Connection Error:", error);
    });

app.use('/api/v1',Routes);
app.get('*',(req,res)=>{
    res.status(200).json(
        {
            status:'404'
        }
    )
})
module.exports=app;