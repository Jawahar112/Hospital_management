import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate} from 'react-router-dom';
import Authservice from '../../services/Auth.service';
import LogoutModal from '../../components/comp/modal';
export default function DoctorNavbar() {
  const navigate=useNavigate()
  
    


    const [toggle,settoggle]=useState(false)
    function logout(){
  settoggle(true);
  
    }
    function onClick(par){
  settoggle(par)
    }
    function confirmlogout(){
   Authservice.logout().then((res)=>{
    if(res.data.verified){
      navigate('/login',{replace:true})
      window.location.reload();
    }
   })
    }
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Hospital Management system</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/admin/dashboard'>Dashboard</Nav.Link>
              
             
              <NavDropdown title="patient" id="basic-nav-dropdown">
                <NavDropdown.Item href="/patientlist">patient_list</NavDropdown.Item>
                <NavDropdown.Item href="/patient/register/user/admin">patient_register</NavDropdown.Item>
                
               
               
              </NavDropdown>
              <NavDropdown title="Doctor" id="basic-nav-dropdown">
                <NavDropdown.Item href="/doctorlist">doctorlist_list</NavDropdown.Item>
                
                
               
               
              </NavDropdown>
              <Nav.Link onClick={()=>{logout()}}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {toggle ? <LogoutModal  Isopen={toggle} onClick={onClick} onconfirm={confirmlogout} />:''}
      </>
      
    )
}
