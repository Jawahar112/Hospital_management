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
 router.get('/get_patients',auth.patient_list)
 router.delete('/patient/delete/:id',auth.deletepatinet)  
 router.get('/patient/get/:id',auth.getpatinet)  
 router.put('/patient/update/:id',auth.updatepatient)  
 router.delete('/doctor/delete/:id',auth.deletedoctor)  
 router.get('/doctor/get/:id',auth.getdoctor)  
 router.put('/doctor/update/:id',auth.updatedoctor) 
 router.get('/get/doctor',auth.getdoctors)
 router.get('/count/:user',auth.conuntuser)
 router.get('/patient/analsys',auth.monthlyusers)
 router.post('/add/doctor',auth.adddoctor)
 router.get('/get/department_data',auth.department_data)
 router.get('/get/user/:user',auth.userdata)
 router.get('/view/appoinments',auth.getappoinments)
 router.get('/view/appoinments/:id',auth.getdoctorappoinments)
 router.get('/get/schedule/:id/:day',auth.getshecdule)
 router.get('/get/appointment/:date/:time',auth.getappoinment)
 router.post('/add/appointment',auth.createappointment)
 module.exports=router;