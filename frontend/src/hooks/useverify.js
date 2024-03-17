
import { useEffect, useState } from 'react';
import Authservice from '../services/Auth.service';


const Useverify=()=>{
    const [auth,setauth]=useState({auth:false})
    console.log(auth);
    useEffect(()=>{
    Authservice.adminverify().then((res)=>{
       
        if(res.data.verified){
        console.log(res.data.verified);
        setauth({auth:true})
        console.log(auth);
        }
    })
 
     },[])
    
    return (auth)

}

export default Useverify