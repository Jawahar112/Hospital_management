import React, { useState } from 'react'
import Navbar from '../navbar/AdminNav'
import './patient.css'


import Authservice from '../../services/Auth.service'

export default function Patients() {
    const [list,setlist]=useState([])
  Authservice.patient_list().then((res)=>{
setlist(res)
  })
    return (

    <div className='patient_list_wrapper'>
     
       <div className='row'>
        <div className='nav col-3'><Navbar/></div>
        <div className='patient_table col'>
        <table className="table bg-light col-9">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
       </div>

       </div>
      
     
    
    
    
  )
}
