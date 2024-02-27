const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.adminverify = (req, res, next) => {
    try{
    const token = req.headers.cookie.token //Assuming the token is in the format: Bearer <token>
    if(token){
        console.log(req.cookies.token);
       
        jwt.verify(token, process.env.token, (err, decoded) => {
            if (err) {
                return res.json({ verified: false, message: 'Token is not valid' });
            } else {
                // You might want to do something with the decoded token here
                req.userData = decoded; // Assuming you want to attach the decoded data to the request object
                next();
            }
        });
    }

    }
catch(err){
return res.json({verified:false})
}
}
