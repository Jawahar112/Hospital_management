
const app=require('express')()
const http=require('http').createServer(app)
const port=3000;
app.get('/',(req,res)=>{
   res.send("hello world")
})
http.listen(port,()=>{
   console.log('connected on 3000');
})
