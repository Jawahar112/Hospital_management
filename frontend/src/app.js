import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Register from './components/patient_register/register';
export default function App() {

  return (
 
  <BrowserRouter>
  <Routes>
    <Route path='/register' exact element={<Register/>}/>
  </Routes>
  </BrowserRouter>
    
    )
  }
  
  