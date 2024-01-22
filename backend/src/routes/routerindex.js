var express=require('express')
const router=express.Router()
const cors=require('cors');
const router1=require('../routes/router1')
const router2=require('../routes/router2')
router.use(cors({
    origin:"http://localhost:3000",credentials:true
 }))
 module.exports=function(app){

 app.use(express.json())
 app.use('/',router1)
 app.use('/api',router2)
 }