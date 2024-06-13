const express=require('express');
const router=express.Router();
const Order=require('../models/Orders');


router.post('/orderdata',async (req,res)=>{
    let data=req.body.order_data;
    await data.splice(0,0,{Order_date:req.body.order_date});  //insert object at the begining of the array.
    let eId=await Order.findOne({'email':req.body.email});
    if(eId === null){
        try {
            await Order.create({
                email:req.body.email,
                order_data:[data]
            });
            res.json({success:true});
            
            } catch (error) {
                console.log("Error in loading data to database")
                res.json({success:false});
            
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({'email':req.body.email},{$push:{order_data:data}});
            res.json({success:true});
            
        } catch (error) {
            console.log("Error in loading data to database")
            res.json({success:false});
        }
    }
});
router.post('/myorderdata',async (req,res)=>{
    let email=req.body.email;
    try{
    let eId=await Order.findOne({'email':email});
    if(eId !== null){
        res.send(eId);
    }
    }catch(error){
        console.log("Error in loading data to database");
    }
}
);
module.exports=router;