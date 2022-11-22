require('dotenv').config({ path: `${__dirname}/.env` }) 
const express = require('express');
const app = express();
const http = require('http');
const mysql=require('mysql');
const server = http.createServer(app);
const io = require('socket.io')(server,{
    cors:{
        origin:'http://localhost:8080',
        methods:["GET","POST"],
        allowedHeaders:["Access-Control-Allow-Origin"],
        credentials:false
    }
});
server.listen(4000,()=>{
    console.log('listening on port 4000')
    console.log()
})
app.get('/',(req,res)=>{
res.send('hi')
})
console.log(process.env.TEST)
var con = mysql.createConnection({
    host:  process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD, 
    database:process.env.DATABASE
  });
io.on('connection',(socket)=>{ 
socket.on('chatVisitor',(data)=>{
con.query('SELECT * FROM CHAT',(err,result,field)=>{
if(err){
    console.log('err:',err)
    socket.emit('error')
  }else if(result){
    socket.emit('chatMessages',result)
  }else if(field){
    console.log('field:',field)
  }
})
})
})

  
