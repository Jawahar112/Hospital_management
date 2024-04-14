import React, { useEffect, useState } from 'react'
import Protectedroute from '../../../utils/Protectedroute'
import useNav from '../../../hooks/Usenav'
import { Link, useParams } from 'react-router-dom'
import Authservice from '../../../services/Auth.service'
import { Button, Table } from 'react-bootstrap'
export default function Viewappoinments() {
const [doctordata,setdoctordata]=useState([])
  useEffect(()=>{
  Authservice.doctorlist().then((res)=>{
    setdoctordata(res.data)

  })
  .catch((err)=>{
    console.log(err);
  })

},[])

const {role}=useParams()
  return (
<Protectedroute user={role}>
{useNav(role)}
   <Table striped>
    <thead>
      <tr>
        <td>Doctor_name</td>
        <td>Doctor_id</td>
        <td>patient_name</td>
        <td>appoinments</td>
      </tr>
    </thead>
    <tbody>

{doctordata.map((item,index)=>{
  return (
    <tr key={index} className='p-5'>

  <td>{item.Doctor_name}</td>
  <td>{item.Id}</td>
  <td>{item.Doctor_name}</td>
<td>
   <Link to={`/viewappointment/id/${item.Id}/${role}`}>
  
  <Button color='primary'>appoinments</Button>
  </Link>
  </td> 
  </tr>
)
})}
</tbody>
   </Table>
</Protectedroute>
  )
}
