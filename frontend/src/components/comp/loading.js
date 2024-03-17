import React from 'react'
import { Spinner } from 'reactstrap'

export default function Loading() {
  return (
<div className='d-flex align-items-center justify-content-center' >
<Spinner color='primary'/>
    <div>Loading</div>
</div>
    
  )
}
