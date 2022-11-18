const Mongoose=require('mongoose')

Mongoose.connect('mongodb+srv://pankaj123:pankaj@cluster0.y1rna8j.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("mongoDB connection successful")
}).catch((err)=>{
    console.log("mongoDB connection failed",err)
})