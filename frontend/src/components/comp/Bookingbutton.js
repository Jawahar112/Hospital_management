import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Authservice from '../../services/Auth.service'
import Appointmentmodel from './appointmentmodel'
export default function Bookingbutton({children,date,day,id,time}) {
  const [booked,setbooked] =useState(false)
  const [Ismodelopened,setmodalopened]=useState(false)
  useEffect(()=>{
    Authservice.checkappointment(date,day,id,time).then((res)=>{
     setbooked(res.data.booked)

    })
    .catch((err)=>{
      console.log(err);
    })
  },[date,day])
  return (
 <>
    <Button className={`mt-3 btn btn-${booked ? "danger":"primary"}`} onClick={()=>{setmodalopened(true)}} disabled={booked}>{booked?"Booked":children}</Button>
    {Ismodelopened ? <Appointmentmodel  Isopen={Ismodelopened} onClick={setmodalopened} data={{date:date,day:day,Doctor_id:id,time:time}}/>:''}
 </>
        
    )
}
