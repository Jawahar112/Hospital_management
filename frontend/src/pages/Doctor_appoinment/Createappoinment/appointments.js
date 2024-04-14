import React from 'react'
import { useEffect ,useState} from 'react'
import Authservice from '../../../services/Auth.service'
import { Table } from 'react-bootstrap'
import { Link, useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Protectedroute from '../../../utils/Protectedroute'
import useNav from '../../../hooks/Usenav'
export default function Appointments() {
   const {role}=useParams()
    const [doctordata,setdoctordata]=useState([])
  async function  getlist(){
  const doc_list=await Authservice.doctorlist()
  if(doc_list){
    setdoctordata(doc_list.data)
  }
 }
    useEffect(()=>{
  getlist()
    
},[doctordata])

  return (
   <>
{useNav(role)}
    <Table>
       <thead>

        <tr>

    <td>doctorid</td>
    <td>Doctor Name</td>
    <td>specialist</td>
    <td>Qualification</td>
    <td>create appoinment</td>

        </tr>
       </thead>
       <tbody>

        {doctordata.map((item,index)=>{
          return (
            <tr key={index} className='p-5'>

  <td>{item.Id}</td>
  <td>{item.Doctor_name}</td>
<td>{item.specialist}</td>
<td>{item.degree}</td>
<td>
   <Link to={`/createappointment/${item.Id}/admin`}>
  
  <Button color='primary'>create appoinment</Button>
  </Link>
  </td> 
  </tr>
)
})}
</tbody>
    </Table>
</>
  )
}
