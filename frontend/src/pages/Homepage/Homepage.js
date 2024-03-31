import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Col, Container, Row} from 'react-bootstrap'
import {FaUserDoctor} from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'

import './homepage.css'
export default function Homepage() {
  return (
<Container>
<Row>
<Col sm={4}>

<Card className='d-flex justify-content-center align-items-center'>
  <Card.Title>Admin Login</Card.Title>
  <Card.Body><FaUser style={{fontSize:'10rem'}}/></Card.Body>
  
<Card.Link href='/admin/login'>Admin</Card.Link>
</Card>
</Col >
<Col sm={4}>

<Card className='d-flex justify-content-center align-items-center' >
  <Card.Title>Doctor Login</Card.Title>
  
  <Card.Body><FaUserDoctor style={{fontSize:'10rem'}}/></Card.Body>
  <Card.Link href='/doctor/login'>Doctor</Card.Link>
</Card>
</Col >
<Col sm={4} >

<Card className='d-flex justify-content-center align-items-center'>
  <Card.Title>Staff Login</Card.Title>
  <Card.Body><FaUser style={{fontSize:'10rem'}}/></Card.Body>
<Card.Link href='/staff/login'>Staff</Card.Link>
</Card>
</Col>
</Row>
</Container>
  )
}
