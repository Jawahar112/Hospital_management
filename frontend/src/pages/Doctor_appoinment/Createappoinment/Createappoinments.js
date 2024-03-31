import React, { useEffect, useState } from "react";
import Authservice from "../../../services/Auth.service";
import Protectedroute from '../../../utils/Protectedroute'
import Customselect from '../../../components/comp/Customselect'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";


export default function Createappoinments() {
 const [doctorlist,setdoctorlist]=useState([])
 const [data,setdata]=useState({doctorname:'',patient_id:'',date:''})

  useEffect(() => {
    Authservice.doctorlist().then((res) => {
   
      setdoctorlist(res.data)
    });
  }, []);
  useEffect(()=>{
Authservice.patient_list().then((res)=>{
  console.log(res);
})
  },[])
  return (
<Protectedroute user="staff">

</Protectedroute>
  )
}
