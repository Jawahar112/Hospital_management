import axios from 'axios';
import Cookies from 'universal-cookie'
axios.defaults.withCredentials=true;
const API_URl="http://localhost:1000/api/"
const auth_url="http://localhost:1000/auth/"
const cookies=new Cookies()

const register=(firstname,lastname,nationality,bloodtype,address,doa,email,phoneno,emergencyphone)=>{
    return axios.post(API_URl+"patient/register",{
firstname,lastname,nationality,bloodtype,address,doa,email,phoneno,emergencyphone
    });
};
const adminlogin=(email,password)=>{
    return axios.post(API_URl+"admin/login/",{
email,password
    })
};
const stafflogin=(email,password)=>{
    return axios.post(API_URl+"staff/login",{
        email,password
    })
}
 const doctorlogin=(email,password)=>{
    return axios.post(API_URl+"doctor/login",{
        email,password
    })
 }
 
const token=cookies.get('token')
 
 const config={
 headers:{
    Authorization:`Bearer ${token}`
 }
 }
 const adminverify=()=>{
    return axios.get(auth_url+"admin",config)

        
 }
 const doctorverify=()=>{
return axios.get(auth_url+"doctor",config)
 }
 const logout=()=>{
return axios.get(auth_url+"logout")
 }
 const patient_list=()=>{
    return axios.get(API_URl+"get_patients")
 }
 const auth=()=>{
    return axios.get(auth_url+"auth")
 }
const Authservice={
    register,adminlogin,stafflogin,doctorlogin,adminverify,doctorverify,logout,patient_list,auth
}
export default Authservice;