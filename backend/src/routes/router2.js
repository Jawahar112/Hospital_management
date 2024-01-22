var express=require('express')
const router=express.Router()
const cors=require('cors');
router.use(cors({
    origin:"http://localhost:3000",credentials:true
 }))
 module.exports=router;