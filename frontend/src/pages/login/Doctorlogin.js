
import Input from "react-validation/build/input"
import React, {  useRef, useState } from 'react'
import Form from "react-validation/build/form"
import CheckButton from "react-validation/build/button"
import Authservice from "../../services/Auth.service"
import { useNavigate } from "react-router-dom"
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
        navigate('/doctor/dashboard',{replace:true});
        setsucessful(true)
        setmessage("")
      }
      else{
        navigate('/doctor/login',{replace:true})
        setmessage(res.data.msg)
setsucessful(false)
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
    <Form onSubmit={submithandle} ref={form} autoComplete="off" className="doctorform">
      <div className="doctor-wrapper">

    <div className='doctor-form form d-flex justify-content-center '>
    <div className='form-container mt-5 p-2'>
    
      <h1 className='text-center text-white'>Doctor Login</h1>
    <div className='form-group row'>
      <div className='col'>
        <Input type='text' className='doctor-email form-control' name="doctor-email" placeholder='Email' onChange={(e)=>{setdata({...data,email:e.target.value})}} validations={[required]} autoComplete="off"/>
      </div>
      <div className='col'>
        <Input type='password' className='doctor-password form-control' name="doctor-password" placeholder='Password'  onChange={(e)=>{setdata({...data,password:e.target.value})}} validations={[required]} autoComplete="off" />
      </div>
    </div>
   
    
     
      
      <button type='submit' className='btn btn-primary m-2' >Login</button>
      {message && (<div className='form-group'>

        <div className={sucessfull?"alert alert-sucess":"alert alert-danger"} role='alert'>{message}</div>
      </div>)}
      <CheckButton style={{display:"none"}} ref={checkbtn}/>
    </div>
    </div>
      </div>
    </Form> 
  )
}
