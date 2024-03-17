const bp=require('body-parser')
const app=require('express')()
const cp=require('cookie-parser')

const http=require('http').createServer(app)
require('./src/routes/routerindex')(app)

const port=1000;
app.use(bp.json())
app.use(bp.urlencoded())
app.use(cp());


http.listen(port,()=>{
 console.log("connected");
})


