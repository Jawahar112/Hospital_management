import {Routes,Route, Navigate, BrowserRouter} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Register from './pages/patient_register/register'
import AdminDashboard from './pages/common/admin/dashboard/Dashboard';
import Patients from './pages/patients_list/Patients';
import Homepage from './pages/Homepage/Homepage';
import DoctorDashboard from './pages/common/doctor/Dashboard/DoctorDashboard';
import StaffDashboard from './pages/common/staff/Dashboard/StaffDashboard';
import Adminlogin from './pages/login/Adminlogin';
import Stafflogin from './pages/login/Stafflogin';
import GetPatients from './pages/patients_list/Patients';
import Doctorlogin from './pages/login/Doctorlogin';
import Protectedroute from './utils/Protectedroute';
import Unauthorized from './pages/404/Unauthorized';


export default function App() {
  
   
  
    
  
  
 
  return (
   
<BrowserRouter>
  <Routes>
    

    <Route path='/login' exact element={<Homepage/>}/>
    <Route path='/staff/login' exact element={<Stafflogin/>}/>
    <Route path='/doctor/login' exact element={<Doctorlogin/>}/>
    <Route path='/admin/login' exact element={<Adminlogin/>}/>
    <Route path='/unauthorized' element={<Unauthorized/>}/>
  

    <Route element={<Protectedroute/>}>
<Route path='/admin/dashboard' element={<AdminDashboard/>}/>

  <Route path='/PatientList' exact element={<GetPatients/>}/>
    <Route path='/admin/patient/patient_list' exact element={<Patients/>}/>
    </Route>
  
    <Route path='/patient/register/user/:role' exact element={<Register/>}/>
    <Route path='/doctor/dashboard' exact element={<DoctorDashboard/>}/>
    <Route path='/staff/dashboard' exact element={<StaffDashboard/>}/>
    
  </Routes>

</BrowserRouter>

    )
  }
  
  