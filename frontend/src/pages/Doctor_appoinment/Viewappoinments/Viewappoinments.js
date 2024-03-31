import React from 'react'
import Protectedroute from '../../../utils/Protectedroute'
import useNav from '../../../hooks/Usenav'
import { useParams } from 'react-router-dom'

export default function Viewappoinments() {
    const {role}=useParams()
  return (
<Protectedroute user={role}>
{useNav(role)}
    <div>appoinments</div>
</Protectedroute>
  )
}
