const cp=require('cookie-parser')
var express=require('express')
const router=express.Router()
const middleware=require('../middlewares/verify')
const logout=require('../middlewares/logout')
const cors=require('cors');

router.use(cors({
    origin:"http://localhost:3000",credentials:true
 }))
 router.use(cp());
router.get("/admin",middleware.adminverify,(req,res)=>{
    console.log(req.role);

    if (req.role !== 'admin') {
        return res.json({verified:false, message: 'Access denied' });
    }
return res.json({verified:true,isadmin:true,role:'Admin'})
})
router.get('/doctor',middleware.doctorverify,(req,res)=>{
    
return res.json({verified:true,message:"doctor verified",role:'Doctor'})


})
router.get('/logout',logout.logout)
 module.exports=router;
 router.get('/auth',middleware.auth,(req,res)=>{
    res.json({role:req.role,verified:true})
 })