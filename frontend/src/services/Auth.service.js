import axios from 'axios';
axios.defaults.withCredentials=true;
const API_URl="http://localhost:1000/api/"
const auth_url="http://localhost:1000/auth/"
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
 const adminverify=()=>{
    return axios.post(auth_url+"admin")
 }
const Authservice={
    register,adminlogin,stafflogin,doctorlogin,adminverify
}
export default Authservice;