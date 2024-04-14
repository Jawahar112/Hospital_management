import React, { useEffect, useState } from 'react'
import DoctorNavbar from '../../../navbar/DoctorNav'
import Authservice from '../../../../services/Auth.service'
import { useNavigate } from 'react-router-dom'
import Protectedroute from '../../../../utils/Protectedroute'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap'
export default function DoctorDashboard() {
 const {role}=useParams() 
  const navigate=useNavigate()
  const [appoinmentdata,setappointmentdata]=useState([])




useEffect(()=>{
Authservice.getappoinments().then((res)=>{
  
setappointmentdata(res.data)
})
},[])

  return (
    <Protectedroute user="doctor">

    <DoctorNavbar/>
    <Table>
      <thead>
        <tr>
          <td>appointment Id</td>
          <td>patient_id</td>
          <td>Date</td>
          <td>fees</td>
          <td>appoinment time</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
         {appoinmentdata.map((item)=>{
          return (
            <tr key={item.appoinment_id}>
            <td>{item.appoinment_id}</td>
            <td>{item.patient_id}</td>
            <td>{item.Date}</td>
            <td className={`${item.fees==="pending"?"bg-danger":"bg-success"}`}>{item.fees}</td>
            <td >{item.appoinment_time}</td>
            <td>{item.status}</td>
            <td><select>
                      <option>Booked</option>
                      <option>Cancelled</option>
                      <option>Completed</option>
                      </select></td>
            </tr>
          )
         })}
      </tbody>
    </Table>
    </Protectedroute>
  )
}
