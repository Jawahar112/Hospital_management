const express=require('express')
const app=express()
const sql=require('mysql');
const dbcon=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hospital_management",
    dateStrings:true
 });
 module.exports=dbcon;


 
 


