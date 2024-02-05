import React from 'react'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdDashboard} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { Link} from 'react-router-dom';

export default function DoctorNavbar() {
  return (
    

    <Sidebar style={{height:"100vh"}}>
      <Menu>
        
        <MenuItem> Appoinments </MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu>
    </Sidebar>
  )
}
