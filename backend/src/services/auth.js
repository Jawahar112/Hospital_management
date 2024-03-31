var express = require("express");
const app = express();
const db = require("../models/dbcon");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cp = require("cookie-parser");
const {v4:uuidv4}=require('uuid')


app.use(cp());
dotenv.config();
db.connect((err, con) => {
  if (err) console.log(err);
  else {
    console.log("db connected");
  }
});
exports.regitser = (req, res) => {
  const uuid=uuidv4()
  const {
    firstname,
    lastname,
    nationality,
    bloodtype,
    address,
    dob,
    email,
    phoneno,
    emergencyphone,
    gender
  } = req.body;
  
console.log(req.body);
  const sql = `INSERT INTO patients( patient_id,first_name, last_name, Nationality, Address, DoA, Email, Phone_no, Emergency_contact, Bloodtype,Gender) VALUES ("${uuid}","${firstname}","${lastname}","${nationality}","${address}","${dob}","${email}","${phoneno}","${emergencyphone}","${bloodtype}","${gender}");`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json("sucess");
  });
};
exports.adminlogin = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM admin where email="${email}"`;

  db.query(sql, (err, result) => {
    if (result.length !== 0) {
      if (result[0].password === password) {
        const salt = bcrypt.genSaltSync(10);
        cryppass = bcrypt.hashSync(password, salt);
        const jsontoken = jwt.sign(
          { role: "admin", expiresIn: "1800s" },
          process.env.AUTH_TOKEN
        );

        res
          .cookie("token", jsontoken, { httpOnly: true, secure: true })
          .json({ verified: true, role: "admin" });
      } else {
        res.json({ verfied: false, msg: "Invalid password" });
      }
    } else {
      res.json({ verified: false, msg: "Invalid Email or password" });
    }
  });
};
exports.stafflogin = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM staffs where email="${email}"`;
  db.query(sql, (err, result) => {
    if (result.length !== 0) {
      if (result[0].password === password) {
        const salt = bcrypt.genSaltSync(10);
        cryppass = bcrypt.hashSync(password, salt);
        const jsontoken = jwt.sign(
          { role: "staff", expiresIn: "1800s" },
          process.env.AUTH_TOKEN
        );

        res
          .cookie("token", jsontoken, { httpOnly: true, secure: true })
          .json({ verified: true,role:"staff" });
      } else {
        res.json({ verfied: false, msg: "Invalid Password" });
      }
    } else {
      res.json({ verified: false, msg: "Invalid Email or Password" });
    }
  });
};
exports.doctorlogin = (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM doctors where email="${email}"`;

  db.query(sql, (err, result) => {
    if (result.length !== 0) {
      if (result[0].password === password) {
        const jsontoken = jwt.sign(
          { role: "doctor", expiresIn: "1800" },
          process.env.AUTH_TOKEN
        );

        res
          .cookie("token", jsontoken, { httpOnly: true, secure: true })
          .json({ verified: true });
      } else {
        res.json({ verfied: false, msg: "Invalid password" });
      }
    } else {
      res.json({ verified: false, msg: "Enter valid Email or Password" });
    }
  });
};
exports.patient_list = (req, res) => {
  const sql =
    "select *,DATE(DoA) as DoA from patients order by patient_id desc ";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    }
    return res.json(result);
  });
};
exports.deletepatinet = (req, res) => {
  const { id } = req.params;
  const sql = `delete from patients where patient_id ="${id}"`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};
exports.getpatinet = (req, res) => {
  const { id } = req.params;
  const sql = `select * ,DATE(DoA) as admitdate from patients where patient_id ="${id}"`;
  db.query(sql, (err, result) => {
    console.log(result);

    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};
exports.updatepatient = (req, res) => {
  const { id } = req.params;
console.log(req.body);
  const userdata = req.body.data;
  let fieldstoupdate = [];
  for (const field in userdata) {
   
    if (
      userdata.hasOwnProperty(field) &&
      userdata[field] !== null &&
      userdata[field] !== undefined&& 
      userdata[field] !== ''

    ) {
      fieldstoupdate.push(`${field}="${userdata[field]}"`);
    }
  }
  let sqlquery = "update patients set ";
  sqlquery += fieldstoupdate.join(", ") +  ` where patient_id=${id}`;
  console.log(sqlquery);
db.query(sqlquery,(err,result)=>{
   if (err) console.log(err);
   return res.json(result)
})
};
exports.getdoctors=(req,res)=>{
  const sql='select * from doctors'
  db.query(sql,(err,result)=>{
    if(err) console.log(err);
    return res.json(result)
  })
}
exports.deletedoctor = (req, res) => {
  const { id } = req.params;
  const sql = `delete from doctors where Doctor_id ="${id}"`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};
exports.getdoctor = (req, res) => {
  const { id } = req.params;
  const sql = `select * ,DATE(Dateofjoin) as admitdate from doctors where Doctor_id ="${id}"`;
  db.query(sql, (err, result) => {
    console.log(result);

    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};
exports.updatedoctor = (req, res) => {
  const { id } = req.params;
console.log(req.body);
  const userdata = req.body.data;
  let fieldstoupdate = [];
  for (const field in userdata) {
   
    if (
      userdata.hasOwnProperty(field) &&
      userdata[field] !== null &&
      userdata[field] !== undefined&& 
      userdata[field] !== ''

    ) {
      fieldstoupdate.push(`${field}="${userdata[field]}"`);
    }
  }
  let sqlquery = "update doctors set ";
  sqlquery += fieldstoupdate.join(", ") +  ` where Doctor_id=${id}`;
 
db.query(sqlquery,(err,result)=>{
   if (err) console.log(err);
   return res.json(result)
})
};
exports.conuntuser=(req,res)=>{
  const {user}=req.params
 
  const sql=`select COUNT(*) as count from ${user}`
  db.query(sql,(err,result)=>{
    if(err) console.log(err);
    return res.json({result:result})
  })
  
}
exports.monthlyusers=(req,res)=>{
  const sql="SELECT COUNT(patient_id) as 'conut' ,month(DoA) as month from patients WHERE(DoA) BETWEEN '2024-01-01' AND '2025-12-31' GROUP BY year(DoA),month(DoA); "
 
  db.query(sql,(err,result)=>{
    if (err)console.log(err);
    return res.json(result)
  })
}
