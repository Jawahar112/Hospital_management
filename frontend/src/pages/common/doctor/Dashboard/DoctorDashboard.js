import React, { useEffect } from 'react'
import DoctorNavbar from '../../../navbar/DoctorNav'
import Authservice from '../../../../services/Auth.service'
import { useNavigate } from 'react-router-dom'
import Protectedroute from '../../../../utils/Protectedroute'
import { useParams } from 'react-router-dom'
export default function DoctorDashboard() {
 const {role}=useParams() 
  const navigate=useNavigate()
useEffect(()=>{
  Authservice.auth().then((res)=>{
    console.log(res);
  })
},[])
  return (
    <Protectedroute user="doctor">

    <DoctorNavbar/>
    </Protectedroute>
  )
}
