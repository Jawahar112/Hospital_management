import React, { useState, useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Modal, Button, ModalBody } from "reactstrap";


import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Authservice from "../../services/Auth.service";

export default function LogoutModal({ Isopen, onClick, onconfirm }) {
  const [opened, setopened] = useState(Isopen);

  return (
    <Modal isOpen={opened}>
      <ModalBody>
        Do you want to logout?
        <Button
          color="danger"
          onClick={() => {
            onClick(!opened)
          }}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => {
            onconfirm();
          }}
        >
          Logout
        </Button>
      </ModalBody>
    </Modal>
  );
}
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
          <Col xxl={12}>First_Name:{data.first_name}</Col>
          <Col xxl={12}>Last_Name:{data.last_name}</Col>
          <Col xxl={12}>Email:{data.Email}</Col>
          <Col xxl={12}>Phone_no:{data.Phone_no}</Col>
          <Col xxl={12}>Address:{data.Address}</Col>
          <Col xxl={12}>Date of admit:{data.admitdate}</Col>
          <Col xxl={12}>Blood_type:{data.Bloodtype}</Col>
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
const [firstname,setfirstname]=useState('')
const[lastname,setlastname]=useState('')
const [nationality,setnationality]=useState('')
const[Address,setaddress]=useState('')
const[DoA,setdoa]=useState('')
const[Email,setemail]=useState('')
const[Phone_no,setphoneno]=useState('')
const[eme_con,seteme_con]=useState('')
const[Bloodtype,setbloodtype]=useState('')

const [upadateddata,setupdateddata]=useState({first_name:'',last_name:'',Nationality:'',Email:'',Address:'',Phone_no:'',Bloodtype:'',admitdate:'',DoA:'', Emergency_contact:''})
 
  useEffect(() => {
 if(userdata){

   
        setfirstname(userdata.first_name)
       setlastname(userdata.last_name)
       setemail(userdata.Email)
       setbloodtype(userdata.Bloodtype)
       setnationality(userdata.Nationality)
       setdoa(userdata.admitdate)
       setaddress(userdata.Address)
       setphoneno(userdata.Phone_no)
       seteme_con(userdata.Emergency_contact)
    }

  },[userdata]);

  async function submithandle(e) {
   
    e.preventDefault();
    setmessage("");
    setsucessful(false);
    form.current.validateAll();

    if (checkbtn.current.context._errors.length === 0) {
      Authservice.userupdate(userdata.patient_id,upadateddata).then((res)=>{
console.log(res);
setopened(false)
window.location.reload();
      })
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
                  placeholder="firstname"
                  value={firstname}
                  onChange={(e)=>{setfirstname(e.target.value);setupdateddata({...upadateddata,first_name:e.target.value})}}
                  validations={[required]}
                />
              </div>
              <div className="col">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="lastname"
                  value={lastname}
                  onChange={(e)=>{setlastname(e.target.value);setupdateddata({...upadateddata,last_name:e.target.value})}}
                  validations={[required]}
                />
              </div>
            </div>
            <div className="row col-9">
              <div className="form-group pt-3 col ">
                <select
                name=""
                  className="form-select"
                  value={nationality}
                  onChange={(e)=>{setnationality(e.target.value);setupdateddata({...upadateddata,Nationality:e.target.value})}}
                  validations={[required]}
                defaultChecked={nationality}
                >
                  <option>select your option</option>
                  <option>Indian</option>
                  <option>forigner</option>
                </select>
              </div>
              <div className="form-group pt-3 col">
                <select
                  className="form-select"
                  value={Bloodtype}
                  onChange={(e)=>{setbloodtype(e.target.value);setupdateddata({...upadateddata,Bloodtype:e.target.value})}}
                  validations={[required]}
                  defaultChecked={Bloodtype}
                >
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
            </div>
            <div className="row col-9">
              <div className="form-group pt-3 col">
                <Input
                  type="text"
                  value={Address}
                  className="form-control"
                  placeholder="Enter your address"
                
                  onChange={(e)=>{setaddress(e.target.value);setupdateddata({...upadateddata,Address:e.target.value})}}
                  validations={[required]}
                />
              </div>
              <div className="form-group pt-3 col">
                <Input
                  type="date"
                  className="form-control datepicker"
                  value={DoA}
                  onChange={(e)=>{setdoa(e.target.value);setupdateddata({...upadateddata,DoA:e.target.value})}}
                  validations={[required]}
                  placeholder="Enter Admit Date"
                />
              </div>
            </div>
            <div className="row col-9">
              <div className="form-group pt-3 col">
                <Input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={Email}
                  onChange={(e)=>{setemail(e.target.value);setupdateddata({...upadateddata,Email:e.target.value})}}
                  validations={[required]}
                />
              </div>
              <div className="form-group pt-3 col">
                <Input
                  type="number"
                  value={Phone_no}
                  className="form-control"
                  placeholder="Enter your phoneno"
                  onChange={
                   (e)=>{
                    setphoneno(e.target.value);setupdateddata({...upadateddata,Phone_no:e.target.value})
                   }
                  }
                  validations={[required]}
                />
              </div>
            </div>
            <div className="row col-9">
              <div className="form-group pt-3 col">
                <Input
                  type="number"
                  className="form-control"
                  value={eme_con}
                  placeholder="Emergency contact number"
                  onChange={(e)=>{seteme_con(e.target.value);setupdateddata({...upadateddata,Emergency_contact:e.target.value})}}
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
