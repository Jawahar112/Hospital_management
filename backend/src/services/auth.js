var express=require('express')
const app=express();
const db=require('../models/dbcon')

   db.connect((err,con)=>{
      if(err)console.log(err);
      else{
console.log("db connected");
      }
   });
   exports.regitser=(req,res)=>{
      const {firstname,lastname,nationality,bloodtype,address,dob,email,phoneno,emergencyphone}=req.body;
      
      const sql = `INSERT INTO patients( first_name, last_name, Nationality, Address, Dob, Email, Phone_no, Emergency_contact, Bloodtype) VALUES ("${firstname}","${lastname}","${nationality}","${address}","${dob}","${email}","${phoneno}","${emergencyphone}","${bloodtype}");`
      
      db.query(sql,(err,result)=>{
         if(err){
            console.log(err);
         }
         res.json("sucess");
         
   })
}