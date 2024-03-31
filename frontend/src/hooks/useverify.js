
import { useEffect, useState } from 'react';
import Authservice from '../services/Auth.service';

const Useverify=()=>{
    const [auth,setauth]=useState({auth:true})
    
    useEffect(()=>{
    Authservice.adminverify().then((res)=>{
       
        if(res.data.verified){
       
        setauth({auth:true})
      
        
        }
    })
 
     },[])
    
    return (auth)

}

export default Useverify