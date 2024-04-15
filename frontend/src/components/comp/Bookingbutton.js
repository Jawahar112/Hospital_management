import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Authservice from '../../services/Auth.service'
import Appointmentmodel from './appointmentmodel'
export default function Bookingbutton({children,date,day,id,time}) {
  const [booked,setbooked] =useState(false)
  const [Ismodelopened,setmodalopened]=useState(false)
  useEffect(()=>{
    const getdata=setTimeout(()=>{

      Authservice.checkappointment(date,time).then((res)=>{
        setbooked(res.data.booked)
       
      });
    },2000)
   
  return ()=>clearTimeout(getdata)},[day,id,time])
  return (
 <>
    <Button className={`mt-3 btn btn-${booked ? "danger":"primary"}`} onClick={()=>{setmodalopened(true)}} disabled={booked}>{booked?"Booked":children}</Button>
    {Ismodelopened ? <Appointmentmodel  Isopen={Ismodelopened} onClick={setmodalopened} data={{date:date,day:day,Doctor_id:id,time:time}}/>:''}
 </>
        
    )
}
