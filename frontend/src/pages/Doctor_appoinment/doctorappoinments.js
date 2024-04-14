import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Authservice from "../../services/Auth.service";
import { Table } from "react-bootstrap";
import Protectedroute from "../../utils/Protectedroute";
import useNav from "../../hooks/Usenav";

export default function Doctorappoinments() {
  const [appoinments, setappointment] = useState([]);
  const { id ,role} = useParams();
  useEffect(() => {
    Authservice.getdoctorappoinments(id).then((res) => {
      setappointment(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Protectedroute user={role}>
{useNav(role)}
    <div>
      {appoinments.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <td>Doctor_id</td>
              <td>appoinment_id</td>
              <td>Date</td>
              <td>fees</td>
              <td>appoinment_time</td>
              <td>patient_id</td>
              <td>Status</td>
              <td>Actions</td>
              <td>patient_name</td>
            </tr>
          </thead>
          <tbody>
            {appoinments.map((item,index) => {
                
                return (
                    <tr key={index}>
                    <td>{item.Doctor_id}</td>
                    <td>{item.appoinment_id}</td>
                    <td>{item.Date}</td>
                    <td className={`${item.fees==="pending"?"bg-danger":"bg-success"}`}>{item.fees}</td>
                    <td>{item.appoinment_time}</td>
                    <td>{item.patient_id}</td>
                    <td>{item.Status}</td>
                    <td>{item.patient_name}</td>
                    <td><select>
                      <option>Booked</option>
                      <option>Cancelled</option>
                      <option>Completed</option>
                      </select></td>
              </tr>
                )
              })}
          </tbody>
        </Table>
      ) : (
        <h1 className="text-center">NO APPOINMENTS</h1>
        )}
    </div>
  )
        </Protectedroute>
  )
      }