const mongoose=require('mongoose');


const adsSchema=new mongoose.Schema({
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company"
    },
    primaryText:{
        type:String,
        required:true,
    },
    headLine:{
        type:String,
        required:true,
    },
    discription:{
        type:String,

    },
    CTA:{
        type:String,
    },
    imageUrl:{type:String}
},{timestamps:true})


const Ads=mongoose.model('Ads',adsSchema);

module.exports=Ads;