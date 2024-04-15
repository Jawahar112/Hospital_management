import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Modal, Button, ModalBody } from "reactstrap";


import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Authservice from "../../services/Auth.service";


export function Deleteusermodal({ Isopen, onClick, onconfirm }) {
  const [opened, setopened] = useState(Isopen);
  return (
    <Modal isOpen={opened}>
      <ModalBody>
        Do you want to delete user?
        <Button
          color="primary"
          onClick={() => {
            onClick(!opened);
          }}
        >
          Cancel
        </Button>
        <Button
          color="danger"
          onClick={() => {
            onconfirm();
          }}
        >
          Delete
        </Button>
      </ModalBody>
    </Modal>
  );
}
export function ViewModal({ Isopen, onClick, data }) {
  const [opened, setopened] = useState(Isopen);
  return (
    <Modal isOpen={opened}>
      <ModalBody>
        <Row>
          <Col xxl={12}>Doctor_Id:{data.Id}</Col>
          <Col xxl={12}>Doctor_name:{data.Doctor_name}</Col>
          <Col xxl={12}>Phone_no:{data.phone_no}</Col>
          <Col xxl={12}> email:{data.email}</Col>
          <Col xxl={12}>Date of admit:{data.admitdate}</Col>
          <Col xxl={12}> degree:{data. degree}</Col>
          <Col xxl={12}>  password:{data.  password}</Col>
          <Col xxl={12}>  specialist:{data.  specialist}</Col>
        </Row>

        <Button
          color="danger"
          onClick={() => {
            onClick(!opened);
          }}
        >
          Close
        </Button>
      </ModalBody>
    </Modal>
  );
}
export function Editmodal({ Isopen, userdata, onclick }) {
  const [opened, setopened] = useState(Isopen);
  const form = useRef();
  const [message, setmessage] = useState("");
  const [sucessfull, setsucessful] = useState(false);
  const checkbtn = useRef();

const[Doctor_name,setname]=useState('')
const [phone_no,setphone_no]=useState('')
const[specialist,setspecialist]=useState('')
const[email,setemail]=useState('')
const[department_id,setdepartment_id]=useState('')


const [upadateddata,setupdateddata]=useState({ department_id:'',specialist:'',Doctor_id:'',Doctor_name:'',DoAphone_no:'', email:'',salary:'',operations:'',Dateofjoin:'',admitdate:''})
 
  useEffect(() => {
 if(userdata){

  
       
       setname(userdata.Doctor_name)
       setemail(userdata.email)
     
       setphone_no(userdata.phone_no)
       setspecialist(userdata.specialist)
       setdepartment_id(userdata.department_id)
     
    }

  },[userdata]);
  
  async function submithandle(e) {
   
    e.preventDefault();
    setmessage("");
    setsucessful(false);
    form.current.validateAll();

    if (checkbtn.current.context._errors.length === 0) {
      Authservice.userupdate(userdata.patient_id,upadateddata).then((res)=>{

setopened(false)
window.location.reload();
      },[])
    }
  }
  const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block font-weight-bold">
          please enter valid input
        </div>
      );
    }
  };
  return (
    <Modal isOpen={opened}>
      <Form onSubmit={submithandle} ref={form}>
        <div className="form   row">
          <div className="form-container">
            <h1 className="text-center text-white">Patient register</h1>
            <div className="form-group row col-9">
              <div className="col">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Doctor Name"
                  value={Doctor_name}
                  onChange={(e)=>{setname(e.target.value);setupdateddata({...upadateddata,Doctor_name:e.target.value})}}
                  validations={[required]}
                />
              </div>
              <div className="col">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  value={email}
                  onChange={(e)=>{setemail(e.target.value);setupdateddata({...upadateddata,email:e.target.value})}}
                  validations={[required]}
                />
              </div>
            </div>
            <div className="row col-9">
              
              <div className="form-group pt-3 col">
                <select
                  className="form-select"
                  value={phone_no}
                  onChange={(e)=>{setspecialist(e.target.value);setupdateddata({...upadateddata,specialist:e.target.value})}}
                  validations={[required]}
                >
                  <option defaultValue="select">
                      select doctor specialist
                    </option>
                    <option>orthologist</option>
                    <option>ent specialist</option>
                    <option>psyhologist</option>
                    <option>physiotherapist</option>
                    <option>cardiology</option>
                    <option>dentist</option>
                    <option>nuerologist</option>
                    <option>bone specialist</option>
                </select>
              </div>
            </div>
            <div className="row col-9">
              
              
            </div>
            <div className="row col-9">
              <div className="form-group pt-3 col">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>{setemail(e.target.value);setupdateddata({...upadateddata,email:e.target.value})}}
                  validations={[required]}
                />
              </div>
              <div className="form-group pt-3 col">
                <Input
                  type="number"
                  value={phone_no}
                  className="form-control"
                  placeholder="Enter your phoneno"
                  onChange={
                   (e)=>{
                    setphone_no(e.target.value);setupdateddata({...upadateddata,Phone_no:e.target.value})
                   }
                  }
                  validations={[required]}
                />
              </div>
            </div>
            
            <input
              type="submit"
              className="btn btn-primary m-2"
              value="Update"
            />
            {message && (
              <div className="form-group">
                <div
                  className={
                    sucessfull ? "alert alert-sucess" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkbtn} />
          </div>
        </div>
      </Form>
      <Button
        color="danger"
        onClick={() => {
          onclick(!opened);
        }}
      >
        Close
      </Button>
    </Modal>
  );
}
