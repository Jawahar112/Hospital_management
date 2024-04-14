import React, { useEffect, useRef, useState } from "react";
import Protectedroute from "../../utils/Protectedroute";
import useNav from "../../hooks/Usenav";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Authservice from "../../services/Auth.service";
import isempty from "../../utils/validations";
import { useNavigate } from "react-router-dom";
import Customselect from "../../components/comp/Customselect";

export default function Adddoctors() {
  const [department_data,set_department_data]=useState([])
  useEffect(()=>
  {
Authservice.getdepid().then((res)=>{
set_department_data(res.data)
console.log(res);

})
  },[])
  const form = useRef();
  const [message, setmessage] = useState("");
  const [sucessfull, setsucessful] = useState(false);
  const checkbtn = useRef();
  const navigate=useNavigate()
  const [data, setdata] = useState({
    Doctor_name: "",
    Department_id: "",
    specialist: "",
    email: "",
    phoneno: "",
    password:""
  });
  async function submithandle(e) {
    e.preventDefault();
    setmessage("");
    setsucessful(false);
    form.current.validateAll();
    if (checkbtn.current.context._errors.length === 0) {
      Authservice.adddoctor(
       data.Department_id,
        data.Doctor_name,
        data.email,
        data.phoneno,
        data.password,
       data.specialist
      ).then(
        (res) => {
          setsucessful(true);
          console.log(res);
      navigate(-1,{replace:true})
        },
        (error) => {
          const resmes = error.response;
          setmessage(resmes);
          setsucessful(false);
        }
      );
    }
  }
  return (<Protectedroute user="admin">
    {useNav('admin')}
    <Form onSubmit={submithandle} ref={form}>
          <div className="form  patient_register row">
            <div className="form-container">
              <h1 className="text-center text-white">Doctor register</h1>
              <div className="form-group row col-9">
                <div className="col">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Doctor name"
                    onChange={(e) => {
                      setdata({ ...data, Doctor_name: e.target.value });
                    }}
                    validations={[isempty]}
                  />
                </div>
                
              </div>
              <div className="form-group pt-3 col-9">
                  <select
                    className="form-select"
                    onChange={(e) => {
                      setdata({ ...data, specialist: e.target.value });
                    }}
                    validations={[isempty]}
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
                <div className="form-group col-9 pt-3">
                  <Customselect data={department_data} field='Department_id' className='form-select' onChange={(e)=>{setdata({...data,Department_id:e.target.value})}}>select department</Customselect>
                </div>
              <div className="row col-9">
                <div className="form-group pt-3 col">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone no"
                    onChange={(e) => {
                      setdata({ ...data, phoneno: e.target.value });
                    }}
                    validations={[isempty]}
                  />
                </div>
               
              </div>
              <div className="row col-9 pt-3">
                <div className="form-group pt-3 col">
                  <Input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setdata({ ...data, email: e.target.value });
                    }}
                    validations={[isempty]}
                  />
                </div>
           
              </div>
              <div className="row col-9">
                <div className="form-group pt-3 col">
                  <Input
                    type="number"
                    className="form-control"
                    placeholder="enter password"
                    onChange={(e) => {
                      setdata({ ...data, password: e.target.value });
                    }}
                    validations={[isempty]}
                  />
                </div>
               
              </div>
              <input
                type="submit"
                className="btn btn-primary m-2"
                value="submit"
              />
              {message && (
                <div className="form-group">
                  <div
                    className={
                      sucessfull ? "alert alert-sucess" : "aler alert-danger"
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
  </Protectedroute>
)}
