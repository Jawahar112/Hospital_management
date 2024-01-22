import axios from 'axios';
const API_URl="http://localhost:1000/api/"
const register=(firstname,lastname,nationality,bloodtype,address,doa,email,phoneno,emergencyphone)=>{
    return axios.post(API_URl+"patient/register",{
firstname,lastname,nationality,bloodtype,address,doa,email,phoneno,emergencyphone
    });
};
 
const Authservice={
    register
}
export default Authservice;