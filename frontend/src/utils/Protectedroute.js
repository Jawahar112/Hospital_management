import { Navigate, Outlet } from "react-router-dom";


import useVerify from "../hooks/useverify";
export default function Protectedroute() {
  const auth=useVerify()
console.log(auth.auth);
   return(
    <>
  
       {auth.auth?<Outlet/>:<Navigate to='/admin/login'/>}
    </>   
       )
}
