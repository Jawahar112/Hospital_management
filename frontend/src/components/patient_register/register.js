import React, { useState } from 'react'
import './register.css'
import axios from 'axios';
import Idgenerator from '../../hooks/Id-generatr';

export default function Register() {
  const[data,setdata]=useState({firstname:"",lastname:"",nationality:"",address:"",doa:"",email:"",phoneno:"",emergencyphone:""})
  async function submithandle(e){
    e.preventDefault();
console.log(data);
  }
  return (
    <form onSubmit={submithandle}>
    <div className='form d-flex justify-content-center'>
    <div className='form-container mt-5 p-2'>
    
      <h1 className='text-center text-white'>Patient register</h1>
    <div className='form-group row'>
      <div className='col'>
        <input type='text' className='form-control' placeholder='firstname' onChange={(e)=>{setdata({...data,firstname:e.target.value})}}/>
      </div>
      <div className='col'>
        <input type='text' className='form-control' placeholder='lastname'  onChange={(e)=>{setdata({...data,lastname:e.target.value})}} />
      </div>
    </div>
    <div className='form-group pt-3'>
      <select className='form-select'  onChange={(e)=>{setdata({...data,nationality:e.target.value})}}>
        <option defaultValue="select">select your nationality</option>
        <option>Indian</option>
        <option>forigner</option>
          </select>
    </div>
    <div className='form-group pt-3'>
      <input type='text' className='form-control' placeholder='Enter your address'  onChange={(e)=>{setdata({...data,address:e.target.value})}}/>    
      </div>
      <div className='form-group pt-3'>
        <input type='date' className='form-control datepicker' onChange={(e)=>{setdata({...data,doa:e.target.value})}} />
      </div>
      <div className='form-group pt-3'>
        <input type='email' className='form-control' placeholder='Enter your email'  onChange={(e)=>{setdata({...data,email:e.target.value})}}/>
      </div>
      <div className='form-group pt-3'>
        <input type='number' className='form-control' placeholder='Enter your phoneno'  onChange={(e)=>{setdata({...data,phoneno:e.target.value})}}/>
      </div>
      <div className='form-group pt-3'>
        <input type='number' className='form-control' placeholder='Emergency contact number'  onChange={(e)=>{setdata({...data,emergencyphone:e.target.value})}}/>
      </div>
      <button type='submit' className='btn btn-primary m-2' >Register</button>
    </div>
    </div>
    </form>
  )
}
