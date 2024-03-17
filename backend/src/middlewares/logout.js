exports.logout=(req,res)=>{
    res.clearCookie("token").json({msg:"logout sucessfully",verified:true}).status(200)
}