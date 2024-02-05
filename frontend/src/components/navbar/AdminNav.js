import React from 'react'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdDashboard} from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { CiBoxList } from "react-icons/ci";
import { Link} from 'react-router-dom';

export default function AdminNavbar() {
  return (
    

    <Sidebar style={{height:"100vh"}}>
      <Menu>
        
          <MenuItem component={<Link to="/admin/dashboard"></Link>} icon={<MdDashboard/>}> Dashboard  </MenuItem>
          <MenuItem component={<Link to="/patient/register"></Link>} icon={<FaUserDoctor />}> Patient register
</MenuItem>
          <MenuItem component={<Link to="/patiet/patient_list"></Link>} icon={<CiBoxList />
}> Patient List</MenuItem>
        <MenuItem> Doctor List</MenuItem>
        <MenuItem> Staffs list </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Sidebar>
  )
}
