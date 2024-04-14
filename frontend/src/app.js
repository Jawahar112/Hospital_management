import {Routes,Route, Navigate, BrowserRouter} from 'react-router-dom'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Register from './pages/patient_register/register'
import AdminDashboard from './pages/common/admin/dashboard/Dashboard';
import Patients from './pages/patients_list/Patients';
import Login from './pages/Loginpage/Login';
import DoctorDashboard from './pages/common/doctor/Dashboard/DoctorDashboard';
import StaffDashboard from './pages/common/staff/Dashboard/StaffDashboard';
import Adminlogin from './pages/login/Adminlogin';
import Stafflogin from './pages/login/Stafflogin';
import GetPatients from './pages/patients_list/Patients';
import Doctorlogin from './pages/login/Doctorlogin';

import Unauthorized from './pages/404/Unauthorized';
import Viewappoinments from './pages/Doctor_appoinment/Viewappoinments/Viewappoinments';
import Createappoinments from './pages/Doctor_appoinment/Createappoinment/Createappoinments';
import GetDoctors from './pages/doctor_list/doctor_list';
import Adddoctors from './pages/adddoctors/adddoctors';
import Doctorappoinments from './pages/Doctor_appoinment/doctorappoinments';
import Homepage from './pages/Homepage/Homepage';
import Appointments from './pages/Doctor_appoinment/Createappoinment/appointments';

export default function App() {
  
   
  
    
  
  
 
  return (
   
<BrowserRouter>
  <Routes>
    
<Route path='/' exact element={<Login/>}/>
    <Route path='/login' exact element={<Login/>}/>
    <Route path='/staff/login' exact element={<Stafflogin/>}/>
    <Route path='/doctor/login' exact element={<Doctorlogin/>}/>
    <Route path='/admin/login' exact element={<Adminlogin/>}/>
    <Route path='/unauthorized' element={<Unauthorized/>}/>
  <Route path='/viewappoinments/:role' element={<Viewappoinments/>}/>
  <Route path='/createappointment/:id/:role' element={<Createappoinments/>}/>
<Route path='/appointments/:role' exact element={<Appointments/>}/>
    
<Route path='/admin/dashboard' exact element={<AdminDashboard/>}/>

  <Route path='/PatientList/:role' exact element={<GetPatients/>}/>
  <Route path='/doctorlist/:role' exact element={<GetDoctors/>}/>
    <Route path='/admin/patient/patient_list' exact element={<Patients/>}/>
    
  
    <Route path='/patient/register/:role' exact element={<Register/>}/>
    <Route path='/doctor/dashboard/' exact element={<DoctorDashboard/>}/>
    <Route path='/staff/dashboard/' exact element={<StaffDashboard/>}/>
    <Route path='/doctor/AddDoctor/:role' exact element={<Adddoctors/>}/>
    <Route path='/viewappointment/id/:id/:role' exact element={<Doctorappoinments/>}/>
  </Routes>

</BrowserRouter>

    )
  }
  
  