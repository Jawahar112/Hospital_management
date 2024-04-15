import React, { useEffect, useState } from "react";


import Loading from "../../components/comp/loading";
import { Table } from "reactstrap";
import Authservice from "../../services/Auth.service";
import {
  Deleteusermodal,
  Editmodal,
  ViewModal,
} from "../../components/comp/doctormodal";
import { Button, Col, Row } from "react-bootstrap";
import Protectedroute from "../../utils/Protectedroute";
import { useParams } from "react-router-dom";
import useNav from "../../hooks/Usenav";
export default function GetDoctors() {
  const [list, setList] = useState([]);
  const [loader, setLoading] = useState(true);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [viewToggle, setViewToggle] = useState(false);
  const [id, setId] = useState(null);
  const [userData, setUserData] = useState({});
  const [edittoggle, seteditToggle] = useState(false);
  const {role}=useParams()
  
  useEffect(() => {
    Authservice.doctorlist().then((res) => {
       console.log(res);
      setLoading(false);
      setList(res.data);
    });
  }, []);

  function handleClick(id, action) {
    if (action === "view") {
      Authservice.doctordata(id).then((res) => {
        setUserData(res.data[0]);
       console.log(res);

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
                  <td>Doctor_id</td>
                  <td>Doctor_name</td>
                  <td>department_id</td>
                  <td>Email</td>
          
                  <td>phone_no</td>
                  <td>salary</td>
              
               
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Id}</td>
                    <td>{item.Doctor_name}</td>
                    <td>{item.department_id}</td>
                    <td>{item.email}</td>
                  
                    <td>{item.phone_no}</td>
                    <td>{item.salary}</td>
                   
                    
                    <td>
                      <Row>
                        <Col>
                          <Button
                            onClick={() => {
                              handleClick(item.Id, "edit");
                            }}
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="success"
                            onClick={() => handleClick(item.Id, "view")}
                          >
                            View
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="danger"
                            onClick={() =>
                              handleClick(item.Id, "delete")
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
                Authservice.deletedoctor(id).then((res) => {
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
