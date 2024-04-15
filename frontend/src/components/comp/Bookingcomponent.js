import React from 'react'
import Authservice from '../../services/Auth.service';
import { useEffect,useState } from 'react';
import Bookingbutton from './Bookingbutton';
import { Card, Col, Row } from 'react-bootstrap';
export default function Bookingcomponent({day,id,date}) {
    const [schedule, setSchedule] = useState([]);
   
    useEffect(() => {
        Authservice.getschedules(id,day)
          .then((res) => {
          
    
         
 
              const Array = JSON.parse(res.data[0][day]);
              
              setSchedule(Array);
    
           
          })
          .catch((error) => {
            console.error("Error fetching schedules:", error);
          });
      }, [id,day]);
  return (
      <Card>
<Card.Header>

      <Row>
<Col>
      <h3 >{day}</h3>
</Col>
<Col>
      <h1>{date}</h1>
</Col>

      </Row>
</Card.Header>
<Card.Body>

    <Row>
{schedule.map((item, index) => (
    <Col sm={3} key={index}>
      <Bookingbutton date={date} day={date} id={id} time={item}>{item}</Bookingbutton>

    </Col>
   
))}
</Row>
</Card.Body>
          
  </Card>
  )
}
