import React, { useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNav";
import "./patient.css";
import Loading from "../../components/comp/loading";
import { Table } from "reactstrap";
import Authservice from "../../services/Auth.service";
import {
  Deleteusermodal,
  Editmodal,
  ViewModal,
} from "../../components/comp/patientmodal";
import { Button, Col, Row } from "react-bootstrap";
import Protectedroute from "../../utils/Protectedroute";
import { useParams } from "react-router-dom";
import useNav from "../../hooks/Usenav";
export default function GetPatients() {
  const [list, setList] = useState([]);
  const [loader, setLoading] = useState(true);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [viewToggle, setViewToggle] = useState(false);
  const [id, setId] = useState(null);
  const [userData, setUserData] = useState({});
  const [edittoggle, seteditToggle] = useState(false);
  const {role}=useParams()
  
  useEffect(() => {
    Authservice.patient_list().then((res) => {
      setLoading(false);
      setList(res.data);
    });
  }, []);

  function handleClick(id, action) {
    if (action === "view") {
      Authservice.patientdata(id).then((res) => {
        setUserData(res.data[0]);

        setViewToggle(true);
      });
    } else if (action === "delete") {
      setDeleteToggle(true);
      setId(id);
    } else {
      Authservice.patientdata(id).then((res) => {
        setUserData(res.data[0]);
      });
      seteditToggle(true);
    }
  }

  return (
    <Protectedroute user={role}>
      <div className="patient_list_wrapper">
        <div className="row" style={{ width: "100%" }}>
          <div className=" col ">
           {useNav(role)}
          </div>

          {loader ? (
            <Loading />
          ) : (
            <Table striped>
              <thead>
                <tr>
                  <td>patient_id</td>
                  <td>First_Name</td>
                  <td>Lastname</td>
                  <td>Email</td>
                  <td>phoneno</td>
                  <td>Nationality</td>
                  <td>Adderess</td>
                  <td>Emergency Contact</td>
                  <td>Date of Admission</td>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.patient_id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone_no}</td>
                    <td>{item.Nationality}</td>
                    <td>{item.Address}</td>
                    <td>{item.Emergency_contact}</td>
                    <td>{item.DoA}</td>
                    <td>
                      <Row>
                        <Col>
                          <Button
                            onClick={() => {
                              handleClick(item.patient_id, "edit");
                            }}
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="success"
                            onClick={() => handleClick(item.patient_id, "view")}
                          >
                            View
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="danger"
                            onClick={() =>
                              handleClick(item.patient_id, "delete")
                            }
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
          {deleteToggle && (
            <Deleteusermodal
              Isopen={deleteToggle}
              onClick={setDeleteToggle}
              onconfirm={() => {
                Authservice.deletepatient(id).then((res) => {
                  setDeleteToggle(false);
                  setId(null);
                  window.location.reload();
                });
              }}
            />
          )}

          {viewToggle && (
            <ViewModal
              Isopen={viewToggle}
              onClick={setViewToggle}
              data={userData}
            />
          )}
          {edittoggle && (
            <Editmodal
              Isopen={edittoggle}
              userdata={userData}
              onclick={seteditToggle}
            
            />
          )}
          {}
        </div>
      </div>
    </Protectedroute>
  );
}
