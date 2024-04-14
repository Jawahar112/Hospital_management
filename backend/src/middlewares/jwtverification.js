const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config();
function verifytoken(token){
    
  
   
     if (!token) {
     
        return  {verified:false,message:"not token"}

     }
     else{

        const decoded=jwt.verify(token,process.env.AUTH_TOKEN)
        return decoded
        }

}
module.exports=verifytoken