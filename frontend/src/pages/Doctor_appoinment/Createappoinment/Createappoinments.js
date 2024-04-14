import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Protectedroute from "../../../utils/Protectedroute";
import { useParams } from "react-router-dom";
import moment from "moment";
import Bookingcomponent from "../../../components/comp/Bookingcomponent";
import useNav from "../../../hooks/Usenav";
export default function Createappoinments() {
  const { id,role } = useParams();
  const currentday = moment().format("dddd");
  const firstdate = moment().format("YYYY-MM-DD");
  const seconddate = moment().add(1, "day").format("YYYY-MM-DD");
  const thirddate = moment().add(2, "day").format("YYYY-MM-DD");
  const nextday = moment().add(1, "days").format("dddd");
  const nextafterday = moment().add(2, "days").format("dddd");
  return (
   <>
   {useNav(role)}
      <center>
        <h1>BOOK APPOINMENT</h1>
      </center>
      <Row>
        <Col>
          <Bookingcomponent day={currentday} id={id} date={firstdate} />
        </Col>
        <Col>
          <Bookingcomponent day={nextday} id={id} date={seconddate} />
        </Col>
        <Col>
          <Bookingcomponent day={nextafterday} id={id} date={thirddate} />
        </Col>
      </Row>
   
   </>
  );
}
