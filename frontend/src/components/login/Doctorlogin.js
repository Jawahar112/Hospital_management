
import Input from "react-validation/build/input"
import React, { useEffect, useRef, useState } from 'react'
import Form from "react-validation/build/form"
import CheckButton from "react-validation/build/button"
import Authservice from "../../services/Auth.service"
import { useNavigate,useHistory } from "react-router-dom"
export default function Doctorlogin() {
    const form=useRef()
  const [message,setmessage]=useState("");
  const [sucessfull,setsucessful]=useState(false);
  const checkbtn=useRef()
  const navigate=useNavigate()
 
  const[data,setdata]=useState({email:"",password:""})
  async function submithandle(e){
    e.preventDefault();
    setmessage("");
    setsucessful(false);
    form.current.validateAll();
    if(checkbtn.current.context._errors.length===0){

    Authservice.doctorlogin(data.email,data.password).then((res)=>{
      console.log(res);
      if(res.data.verified){
        navigate('/doctor/dashboard');
      }
      else{
        navigate('/doctor/login')
      }
    })
  
  }
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
    
      <h1 className='text-center text-white'>Doctor Login</h1>
    <div className='form-group row'>
      <div className='col'>
        <Input type='text' className='form-control' placeholder='Email' onChange={(e)=>{setdata({...data,email:e.target.value})}} validations={[required]}/>
      </div>
      <div className='col'>
        <Input type='password' className='form-control' placeholder='Password'  onChange={(e)=>{setdata({...data,password:e.target.value})}} validations={[required]} />
      </div>
    </div>
   
    
     
      
      <button type='submit' className='btn btn-primary m-2' >Login</button>
      {message && (<div className='form-group'>

        <div className={sucessfull?"alert alert-sucess":"aler alert-danger"} role='alert'>{message}</div>
      </div>)}
      <CheckButton style={{display:"none"}} ref={checkbtn}/>
    </div>
    </div>
    </Form> 
  )
}
