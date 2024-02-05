import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Register from './components/patient_register/register'
import AdminDashboard from './components/common/admin/dashboard/Dashboard';
import Patients from './components/patients_list/Patients';
import Homepage from './components/Homepage/Homepage';
import DoctorDashboard from './components/common/doctor/Dashboard/DoctorDashboard';
import StaffDashboard from './components/common/staff/Dashboard/StaffDashboard';
import Adminlogin from './components/login/Adminlogin';
import Stafflogin from './components/login/Stafflogin';
import Doctorlogin from './components/login/Doctorlogin';
export default function App() {

  return (
 
  <BrowserRouter>
  <Routes>
    <Route path='/patient/register' exact element={<Register/>}/>
    <Route path='/admin/dashboard' exact element={<AdminDashboard/>}/>
    <Route path='/admin/patient/patient_list' exact element={<Patients/>}/>
    <Route path='/' exact element={<Homepage/>}/>
    <Route path='/doctor/dashboard' exact element={<DoctorDashboard/>}/>
    <Route path='/staff/dashboard' exact element={<StaffDashboard/>}/>
    <Route path='/admin/login' exact element={<Adminlogin/>}/>
    <Route path='/doctor/login' exact element={<Doctorlogin/>}/>
    <Route path='/staff/login' exact element={<Stafflogin/>}/>
  </Routes>
  </BrowserRouter>
    
    )
  }
  
  