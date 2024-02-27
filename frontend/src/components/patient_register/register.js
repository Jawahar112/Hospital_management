import React, { useEffect, useRef, useState } from 'react'
import './register.css'
import Authservice from '../../services/Auth.service';
import Input from "react-validation/build/input"
import Form from "react-validation/build/form"
import CheckButton from "react-validation/build/button"
export default function Register() {
  const form=useRef()
  const [message,setmessage]=useState("");
  const [sucessfull,setsucessful]=useState(false);
  const checkbtn=useRef()
  const[data,setdata]=useState({firstname:"",lastname:"",nationality:"",bloodtype:"",address:"",doa:"",email:"",phoneno:"",emergencyphone:""})
  async function submithandle(e){
    e.preventDefault();
    setmessage("");
    setsucessful(false);
    form.current.validateAll();
    if(checkbtn.current.context._errors.length===0){

    
   Authservice.register(data.firstname,data.lastname,data.nationality,data.bloodtype,data.address,data.doa,data.email,data.phoneno,data.emergencyphone).then((res)=>{
    setsucessful(true);
    console.log(res);
   },
(error)=>{
const resmes=(error.response)
setmessage(resmes);
setsucessful(false);
}
  )}
}
  const required=(value)=>{
    if(!value){
      return(
    <div className='invalid-feedback d-block font-weight-bold'>
         please enter valid input
        </div> 
      )
    }
  }
  return (
    <Form onSubmit={submithandle} ref={form}>
    <div className='form d-flex justify-content-center'>
    <div className='form-container mt-5 p-2'>
    
      <h1 className='text-center text-white'>Patient register</h1>
    <div className='form-group row'>
      <div className='col'>
        <Input type='text' className='form-control' placeholder='firstname' onChange={(e)=>{setdata({...data,firstname:e.target.value})}} validations={[required]}/>
      </div>
      <div className='col'>
        <Input type='text' className='form-control' placeholder='lastname'  onChange={(e)=>{setdata({...data,lastname:e.target.value})}} validations={[required]} />
      </div>
    </div>
    <div className='form-group pt-3'>
      <select className='form-select'  onChange={(e)=>{setdata({...data,nationality:e.target.value})}} validations={[required]}>
        <option defaultValue="select">select your nationality</option>
        <option>Indian</option>
        <option>forigner</option>
          </select>
    </div>
    <div className='form-group pt-3'>
      <select className='form-select'  onChange={(e)=>{setdata({...data,bloodtype:e.target.value})}} validations={[required]}>
        <option defaultValue="select">select your Blood group</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB-</option>
        <option>AB+</option>
          </select>
    </div>
    <div className='form-group pt-3'>
      <Input type='text' className='form-control' placeholder='Enter your address'  onChange={(e)=>{setdata({...data,address:e.target.value})}} validations={[required]}/>    
      </div>
      <div className='form-group pt-3'>
        <Input type='date' className='form-control datepicker' onChange={(e)=>{setdata({...data,doa:e.target.value})}} validations={[required]} />
      </div>
      <div className='form-group pt-3'>
        <Input type='email' className='form-control' placeholder='Enter your email'  onChange={(e)=>{setdata({...data,email:e.target.value})}} validations={[required]}/>
      </div>
      <div className='form-group pt-3'>
        <Input type='number' className='form-control' placeholder='Enter your phoneno'  onChange={(e)=>{setdata({...data,phoneno:e.target.value})}} validations={[required]}/>
      </div>
      <div className='form-group pt-3'>
        <Input type='number' className='form-control' placeholder='Emergency contact number'  onChange={(e)=>{setdata({...data,emergencyphone:e.target.value})}} validations={[required]}/>
      </div>
      <button type='submit' className='btn btn-primary m-2' >Register</button>
      {message && (<div className='form-group'>

        <div className={sucessfull?"alert alert-sucess":"aler alert-danger"} role='alert'>{message}</div>
      </div>)}
      <CheckButton style={{display:"none"}} ref={checkbtn}/>
    </div>
    </div>
    </Form>
  )
}
