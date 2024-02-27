
var express=require('express')
const router=express.Router()
const middleware=require('../middlewares/verify')
const cors=require('cors');
router.use(cors({
    origin:"http://localhost:3000",credentials:true
 }))
router.post("/admin",middleware.adminverify,(req,res)=>{

})
 module.exports=router;