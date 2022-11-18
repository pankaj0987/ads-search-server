const express=require('express');
const router=express.Router();
const Ads= require("../model/adsSchema")
const Company= require("../model/companySchema")


router.post('/addAds',async (req,res)=>{
    try{
    const doc=new Company(req.body)
    const result=await doc.save()
    if(result) return res.status(200).json({result})
    return res.status(401).json({error:"unable to add"})
    }
    catch(error){
        console.log(error)
        return res.status(501).json({error:"something went wrong"})
    }

});


router.get('/getAdsByQuery/:searchQuery',async (req,res)=>{
    try{
        const {searchQuery}=req.params;
        let regex = new RegExp(searchQuery,'i');
        let result = await Ads.aggregate([
            { 
              $lookup:{
                 from:"companies",
                 localField: "companyId",
                 foreignField: "_id",
                 as: "company"
              }
            },
           {
             $unwind: {
                path:"$company",
                preserveNullAndEmptyArrays:true 
             }
           },
           {
            $addFields:{name:"$company.name"}
           },
           {
            $match:{
                $or: [{'primaryText':regex},{'headLine':regex},{'name':regex},{'description':regex}]
            }
           }
        ])
        
        if(result) return res.status(200).json({result})
        return res.status(401).json({error:"unable to get"})
        }
        catch(error){
            console.log(error)
            return res.status(501).json({error:"something went wrong"})
        }

});

module.exports=router