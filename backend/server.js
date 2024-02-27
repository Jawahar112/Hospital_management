const bp=require('body-parser')
const app=require('express')()
const cp=require('cookie-parser')

const http=require('http').createServer(app)
require('./src/routes/routerindex')(app)

const port=1000;
app.use(bp.json())
app.use(bp.urlencoded())
app.use(cp());
 app.use(function(req,res,next){
   res.header('Access-Control-Allow-Orgin',req.headers.origin);
 })

http.listen(port,()=>{
   console.log('connected on 1000');
})


