import AdminNavbar from "../../../navbar/AdminNav"
import { useEffect } from "react"
import Authservice from "../../../../services/Auth.service"
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate=useNavigate()
    useEffect(()=>{
     Authservice.adminverify().then((res)=>{
        if(res.data.verified){
           navigate('/admin/dashboard') 
           console.log(res.data.verified);
        }
        else{
            navigate('/admin/login')
            console.log(res.data);
        }
     });
    },[]);
return (
    <div className="dashboard-wrapper">
        <div className="header">
            <div className="logo">
               
            </div>
            <div className="search-patient">
                   
                    </div>
        </div>
        <div className="content">
<AdminNavbar/>
        </div>
    </div>
)
}
