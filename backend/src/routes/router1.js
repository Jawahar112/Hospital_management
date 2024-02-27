var express=require('express')
const router=express.Router()
const cors=require('cors');
const middleware=require('../middlewares/verify')
const cp=require('cookie-parser')
const auth=require("../services/auth")
router.use(cors({
    origin:"http://localhost:3000",credentials:true
 }))
router.use(cp());

 router.post('/patient/register',auth.regitser

 )
 router.post('/admin/login',auth.adminlogin)
 router.post('/doctor/login',auth.doctorlogin)
 router.post('/staff/login',auth.stafflogin)

   
 module.exports=router;