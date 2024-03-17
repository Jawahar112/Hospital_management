var express=require('express')
const app=express();
const db=require('../models/dbcon')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
const bcrypt=require('bcrypt')
const cp=require('cookie-parser')
app.use(cp())
dotenv.config();
   db.connect((err,con)=>{
      if(err)console.log(err);
      else{
console.log("db connected");
      }
   });
   exports.regitser=(req,res)=>{
      const {firstname,lastname,nationality,bloodtype,address,dob,email,phoneno,emergencyphone}=req.body;
      
      const sql = `INSERT INTO patients( first_name, last_name, Nationality, Address, DoA, Email, Phone_no, Emergency_contact, Bloodtype) VALUES ("${firstname}","${lastname}","${nationality}","${address}","${dob}","${email}","${phoneno}","${emergencyphone}","${bloodtype}");`
      
      db.query(sql,(err,result)=>{
         if(err){
            console.log(err);
         }
         res.json("sucess");
         
   })
}
exports.adminlogin=(req,res)=>{
   const {email,password}=req.body;
  const sql=`SELECT * FROM admin where email="${email}"`
  
  db.query(sql,(err,result)=>{
  
 if(result.length!==0){
   if(result[0].password===password){
   
      const salt=bcrypt.genSaltSync(10);
      cryppass=bcrypt.hashSync(password,salt);
      const jsontoken=jwt.sign({role:"admin",expiresIn:'1800s'},process.env.AUTH_TOKEN);

      res.cookie('token',jsontoken,{httpOnly:true,secure:true}).json({verified:true,role:"admin"});
   }
   else{
      res.json({verfied:false,msg:"Invalid password"})
   }


 }
 else{
   res.json({verified:false,msg:"Invalid Email or password"})
 }

  })
}
exports.stafflogin=(req,res)=>{
   const {email,password}=req.body;
  const sql=`SELECT * FROM staffs where email="${email}"`
  db.query(sql,(err,result)=>{
  
   if(result.length!==0){
      if(result[0].password===password){
         const salt=bcrypt.genSaltSync(10);
         cryppass=bcrypt.hashSync(password,salt);
         const jsontoken=jwt.sign({role:"doctor",expiresIn:'1800s'},process.env.AUTH_TOKEN);
   
         res.cookie('token',jsontoken,{httpOnly:true,secure:true}).json({verified:true});
      }
      else{
         res.json({verfied:false,msg:"Invalid Password"})
      }  
 
   
    }
    else{
      res.json({verified:false,msg:"Invalid Email or Password"})
   }


  })
}
exports.doctorlogin=(req,res)=>{
   const {email,password}=req.body;
  const sql=`SELECT * FROM doctors where email="${email}"`

  db.query(sql,(err,result)=>{
  
   if(result.length!==0){
      if(result[0].password===password){
         
         const jsontoken=jwt.sign({role:"doctor",expiresIn:'1800'},process.env.AUTH_TOKEN);
   
         res.cookie('token',jsontoken,{httpOnly:true,secure:true}).json({verified:true});
      

   
    }
    else{
      res.json({verfied:false,msg:"Invalid password"})
    }
   }
    else{
      res.json({verified:false,msg:"Enter valid Email or Password"})
   }

  })
}
exports.patient_list=(req,res)=>{
const sql='select *,DATE(DoA) as dateofadmit from patients '
db.query(sql,(err,result)=>{
   if(err){
       return res.json(err)
   }
  return res.json(result)
   
})
}
