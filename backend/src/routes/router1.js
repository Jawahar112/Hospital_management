var express=require('express')
const router=express.Router()
const cors=require('cors');
const auth=require("../services/auth")
router.use(cors({
    origin:"http://localhost:3000",credentials:true
 }))

 router.post('/api/patient/register',auth.regitser

 )


   
 
 module.exports=router;