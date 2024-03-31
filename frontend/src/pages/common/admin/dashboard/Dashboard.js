import { useLocation } from "react-router-dom";
import useNav from "../../../../hooks/Usenav";
import Protectedroute from "../../../../utils/Protectedroute";
import { Card, Collapse, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Authservice from "../../../../services/Auth.service";
import { Bar, Line,Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import './dashboard.css'
export default function AdminDashboard() {
  const [patientdata, setpatientdata] = useState([]);
  const [patientcount, setpatientcount] = useState(null);
  const [doctorcount, setdoctorcount] = useState(null);
  const [staffcount, setstaffcount] = useState(null);
  useEffect(() => {
    Authservice.monthlypatients().then((res) => {
      setpatientdata(res.data);
      console.log(res.data);
    });
  }, []);
  const patientplotdata = {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "june",
      "july",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        label: "monthly patients",
        data: patientdata.map((data, index) => {
          return data.conut;
        }),
        fill: false,
        borderColor: "blue",
        tension: 0.1,
      },
    ],
  };
  const patientplotoptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: "category",
        beginAtZero: true,
      },
    },
  };
  const loction = useLocation();
  useEffect(() => {
    Authservice.countuser("patients").then((res) => {
      console.log(res.data.result[0]);
      setpatientcount(res.data.result[0].count);
    });
  }, []);
  useEffect(() => {
    Authservice.countuser("doctors").then((res) => {
      console.log(res.data.result[0]);
      setdoctorcount(res.data.result[0].count);
    });
  }, []);
  useEffect(() => {
    Authservice.countuser("staffs").then((res) => {
      console.log(res.data.result[0]);
      setstaffcount(res.data.result[0].count);
    });
  }, []);
  return (
    <Protectedroute user="admin">
      <div className="dashboard-wrapper">
        <header>
          {useNav("admin")}
          <div className="dashboard-header bg-dark text-white d-flex justify-content-between">
            <div className="logo p-2">
              <h2>Dashboard</h2>
            </div>
            <div className="path p-2">{loction.pathname}</div>
          </div>
        </header>
        <div className="wrapper" style={{ background: "rgba(0,0,0,0.1)" }}>
          <section className="cards">
            <Container>
              <Row xs={1} md={3}>
                
              </Row>
            </Container>
          </section>
          <section className="plots">
            <Row>
              <Col sm={12} lg={6}>
                <Line
                  data={patientplotdata}
                  options={patientplotoptions}
                  className="col-6 bg-white"
                />
              </Col>

              <Col sm={12} lg={6}>
                <Bar
                className="bg-white"
                  data={{
                    labels: ["surgery", "bascic","nuerology"],
                    datasets: [{
                      data:[12,45,56]
                    }],
                    backgroundcColor: "#36A2EB",
                  }}
                  options={{
                    responsive:true,
                    maintainAspectRatio:true,
                    indexAxis: "x",
                    plugins: {
                      legend: { display: false },
                      title: { display: true, text: "Treatment type" },
                    },
                  }}
                />
              </Col>

            </Row>
            <Row>
              <Col sm={12}lg={3}> 
              <Doughnut
              className="bg-white "
              data={{
                labels:['Male','Female'],
                datasets:[{
                  data:[20,10],
                  backgroundColor:['red','blue']
                }]
              }}/>
              </Col>
              <Col>
                  <Card className=" text-center p-5 bg-primary text-white">
                    <h3>Patients</h3>
                    <h4 className=" text-center">{patientcount}</h4>
                  </Card>
                </Col>
                <Col>
                  <Card className=" text-center p-5 bg-danger text-white">
                    <h3>Doctors</h3>
                    <h4 className=" text-center">{doctorcount}</h4>
                  </Card>
                </Col>
                <Col>
                  <Card className=" text-center p-5">
                    <h3>Staffs</h3>
                    <h4 className=" text-center">{staffcount}</h4>
                  </Card>
                </Col>
            </Row>
          </section>
        </div>
      </div>
    </Protectedroute>
  );
}
