import React, { useState } from 'react'
import { Button, ModalHeader } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import isempty from "../../utils/validations";
import Authservice from '../../services/Auth.service';
export default function Appointmentmodel(props) {
     const [opened,setopened]=useState(props.Isopen)
     const [data,setdata]=useState({email:"",phone_no:"",name:""})
   async function submithandle(e){
    e.preventDefault();
    Authservice.createappointment(props.data.Doctor_id,props.data.time,props.data.date,data.email)
 
   }
     return (
   <Modal show={opened} onHide={props.onClick} >
    <ModalHeader closeButton>

    <center>
        <h3>Confirmation?</h3>
        </center>
    </ModalHeader>
        <Form onSubmit={submithandle}>
            <Input type="text" placeholder="Enter patient Name" className=" form-control p-2" />
            <Input type="email" placeholder="Enter patient Email" className=" form-control p-2" onChange={(e)=>{setdata({...data,email:e.target.value})}}/>
            <Input type="number" placeholder="Enter patient PhoneNo" className=" form-control p-2"/>
            
            <Button type="submit"  value="submit">BOOK</Button>
        </Form>

   </Modal>
  )
}
