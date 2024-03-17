import React, { useEffect } from 'react'
import DoctorNavbar from '../../../navbar/DoctorNav'
import Authservice from '../../../../services/Auth.service'
import { useNavigate } from 'react-router-dom'
export default function DoctorDashboard() {
  const navigate=useNavigate()
  useEffect(()=>{
Authservice.doctorverify().then((res)=>{
  if(res.data.verified){
  navigate('/doctor/dashboard')
console.log(res);
}
else{
    navigate('/doctor/login')
    console.log(res.data);
}
})
  },[])
  return (
    
    <DoctorNavbar/>
  )
}
