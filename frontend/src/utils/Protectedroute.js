import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import Authservice from "../services/Auth.service";

export default function Protectedroute({children,user}) {
   const [auth,setauth]=useState(false)
   const [loading,setloading]=useState(true)
  const checkauth=async()=>{

const auth=await Authservice.auth()

if(auth.data.verified && auth.data.role === user){
   
   setauth(true)
   
}
setloading(false)
  }
  useEffect(()=>{
   checkauth()
  },[])

if(loading){
   return <div>loading</div>
}
return <>
{auth?children:(<Navigate to='/unauthorized' replace={true}/>)}</>
     
   
}
