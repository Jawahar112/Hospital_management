import React from 'react'
import StaffNavbar from '../../../navbar/StaffNav'
import Protectedroute from '../../../../utils/Protectedroute'
export default function StaffDashboard() {
  return (
    <Protectedroute user="staff">


<StaffNavbar/>

    </Protectedroute >

  )
}
