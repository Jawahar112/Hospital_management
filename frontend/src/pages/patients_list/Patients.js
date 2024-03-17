import React, { useEffect, useState } from 'react'
import AdminNavbar from '../navbar/AdminNav'
import './patient.css'
import Loading from '../../components/comp/loading'
import { Table } from 'reactstrap'
import Authservice from '../../services/Auth.service'
import Customtable from '../../components/customtable'
export default function GetPatients() {
    const [list,setlist]=useState([])
    const [loader,setloading]=useState([true])
  useEffect(()=>{
    Authservice.patient_list().then((res)=>{
    setloading(false);
      setlist(res.data)
    console.log(res.data);
        })
  },[])
  
 
    return (

    <div className='patient_list_wrapper'>
     
       <div className='row' style={{width:"100%"}}>
   <div className=' col'>
    <AdminNavbar/>
   </div>
        <div className='patient_table col-10'>
    
    {loader ? (<Loading/>):(
      <Table striped>
        <thead>
          <tr>
            <td>patient_id</td>
            <td>First_Name</td>
            <td>Lastname</td>
            <td>Email</td>
            <td>phoneno</td>
            <td>Nationality</td>
            <td>Adderess</td>
            <td>Emergency Contact</td>
            <td>Date of Admission</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item,index)=>{
            return(<tr key={index}>
              <td>{item.patient_id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.Email}</td>
              <td>{item.Phone_no}</td>
              <td>{item.Nationality}</td>
              <td>{item.Address}</td>
              <td>{item.Emergency_contact}</td>
              <td>{item.DoA}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    )}
        </div>
       </div>

       </div>
      
     
    
    
    
  )
}
