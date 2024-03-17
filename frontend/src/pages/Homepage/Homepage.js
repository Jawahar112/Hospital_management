import React from 'react'
import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
<div>
<Link to='/admin/login'>Admin</Link>
<Link to='/staff/login'>Staff</Link>
<Link to='/doctor/login'>Doctor</Link>

</div>
  )
}
