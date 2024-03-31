import axios from "axios";
import Cookies from "universal-cookie";
axios.defaults.withCredentials = true;
const API_URl = "http://localhost:1000/api/";
const auth_url = "http://localhost:1000/auth/";
const cookies = new Cookies();

const register = (
  firstname,
  lastname,
  nationality,
  bloodtype,
  address,
  doa,
  email,
  phoneno,
  emergencyphone,
  gender
) => {
  return axios.post(API_URl + "patient/register", {
    firstname,
    lastname,
    nationality,
    bloodtype,
    address,
    doa,
    email,
    phoneno,
    emergencyphone,
    gender,
  });
};
const adminlogin = (email, password) => {
  return axios.post(API_URl + "admin/login/", {
    email,
    password,
  });
};
const stafflogin = (email, password) => {
  return axios.post(API_URl + "staff/login", {
    email,
    password,
  });
};
const doctorlogin = (email, password) => {
  return axios.post(API_URl + "doctor/login", {
    email,
    password,
  });
};

const token = cookies.get("token");

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const adminverify = () => {
  return axios.get(auth_url + "admin", config);
};
const doctorverify = () => {
  return axios.get(auth_url + "doctor", config);
};
const logout = () => {
  return axios.get(auth_url + "logout");
};
const patient_list = () => {
  return axios.get(API_URl + "get_patients");
};
const auth = () => {
  return axios.get(auth_url + "auth");
};
const deletepatient = (id) => {
  return axios.delete(API_URl + "patient/delete/" + id);
};
const patientdata = (id) => {
  return axios.get(API_URl + "patient/get/" + id);
};
const userupdate = (id, data) => {
  console.log(id);
  return axios.put(API_URl + "patient/update/" + id, {
    data,
  });
}
  const deletedoctor = (id) => {
    return axios.delete(API_URl + "doctor/delete/" + id);
  }
  const doctordata = (id) => {
    return axios.get(API_URl + "doctor/get/" + id);
  };
  const doctorupdate = (id, data) => {
    console.log(id);
    return axios.put(API_URl + "doctor/update/" + id, {
      data,
    });
}
const doctorlist = () => {
  return axios.get(API_URl + "get/doctor");
}
const countuser=(user)=>{
return axios.get(API_URl+"count/"+user)
}
const monthlypatients=()=>{
  return axios.get(API_URl+"patient/analsys")
}
const Authservice = {
  register,
  adminlogin,
  stafflogin,
  doctorlogin,
  adminverify,
  doctorverify,
  logout,
  patient_list,
  auth,
  deletepatient,
  patientdata,
  userupdate,
  doctorlist,
  deletedoctor,
  doctordata,
  doctorupdate,
  countuser,
  monthlypatients
};
export default Authservice;
