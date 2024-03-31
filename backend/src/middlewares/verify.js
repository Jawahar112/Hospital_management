var express=require('express')
const cp=require('cookie-parser')
const router=express.Router()
const {v4:uuidv4}=require('uuid')
router.use(cp())

const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');



exports.adminverify = (req, res, next) => {
 
    if(Object.getPrototypeOf(req.cookies)===null){
        return res.json({verified:false})
  
}
else{
   
   const token=req.cookies.token
    

    if (!token) {
      return  res.json({verified:false,message:"not token"})
     }
jwt.verify(token,process.env.AUTH_TOKEN,(err,decoded)=>{
if(err){
    console.log("error in jwt");
}
req.role=decoded.role;

next();
})
 }
}


exports.doctorverify = (req, res, next) => {

    // Middleware to verify JWT token and extract role
    if(Object.getPrototypeOf(req.cookies)===null){
        return res.json({verified:false})
  
}
else{
   
   const token=req.cookies.token
    

    if (!token) {
      return  res.json({verified:false,message:"not token"})
     }
jwt.verify(token,process.env.AUTH_TOKEN,(err,decoded)=>{
if(err){
    console.log("error in jt");
}
req.role=decoded.role

next();
})
   
}}
 


exports.auth=(req,res,next)=>{

    if(Object.getPrototypeOf(req.cookies)===null){
        return res.json({verified:false})}
else{
   const token=req.cookies.token
     if (!token) {
      return  res.json({verified:false,message:"not token"})
     }
jwt.verify(token,process.env.AUTH_TOKEN,(err,decoded)=>{
    

if(err){
    console.log("error in jwt");
}
req.role=decoded.role

next();
})
}  
 }   

    
