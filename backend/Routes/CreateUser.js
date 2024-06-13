const express=require('express');
const router=express.Router();
const User=require('../models/User');
const {validationResult}=require('express-validator');
const {signUpValidation}=require('../validations/userValidation');  
const {loginValidation}=require('../validations/userValidation');  

const bcrypt=require('bcryptjs');

const jwt=require('jsonwebtoken');
const jwtSecret='MyNameIsTaimoor';

router.post('/createuser',signUpValidation(),async (req,res)=>{
    try {

        const err= validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({err : err.array() });
        }
        const salt=await bcrypt.genSalt(10);
        const secPassword=await bcrypt.hash(req.body.password,salt);
        await User.create({
            name:req.body.name,
            email:req.body.email,
            location:req.body.location,
            password:secPassword
        });
        res.json({success:true});
        
    } catch (error) {
        console.log(error);
        res.json({success:false});        
    }

})
router.post('/login',loginValidation(),async (req,res)=>{
    try {
        const err=validationResult(req);
        if(!err.isEmpty()){
            return res.status(400).json({err : err.array() });
        }
        const email=req.body.email;
        const userData=await User.findOne({email});
        
        if(!userData) return res.status(400).json({err : 'Enter valid credentials'});
        const passwordCheck=await bcrypt.compare(req.body.password,userData.password );
        if(!passwordCheck) return res.status(400).json({err : 'Enter valid credentials'});

        const data={
            user:{
                id:userData.id
            }
        }
        const authToken= jwt.sign(data,jwtSecret);

        return res.json({success:true,authToken});
        
    } catch (error) {
        console.log(error);
        return res.json({success:false});        
    }

})



module.exports=router;