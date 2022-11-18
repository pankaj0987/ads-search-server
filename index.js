const express=require('express')
const cors=require('cors');
const path=require('path')
const app=express()

require('./db/conn')
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use('/public',express.static(path.join(__dirname,'Images')));
app.use(cors());
app.use(require('./routes/ads'))



app.listen(8000,()=>{
    console.log("server is running on",8000)
})