
/*
    Node.js 
*/


const express = require('express')
const server=express()
let data={
    Name:'Arjun thakur',
    Batch:'EA18',
    Status:'Active'
}
server.get('/',(req,res)=>{
    res.write(`<body style='text-align:center'><h1>Welcome to Our Server Home.</h1><h4>Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.</h4> <h1><a href='./about'>JSON Page</a></h1></body>`)
    res.end()
});
server.get('/about',(req,res)=>{
    res.write(`<body style='text-align:center'><h1><a href='/contact'>About Server Page</a></h1></body>`)
    res.write(JSON.stringify(data))
    res.end()
});
server.get('/contact',(req,res)=>{
    res.write(`<body style='text-align:center'><h1>Contact Server. <br/><a href='/'>Home</a></h1><body/>`)
    res.end()
});
server.get('*',(req,res)=>{
    res.writeHead(404)          // Assign Error or Status Code
    res.end('Error')
});
server.listen(1000,()=>{
    console.log('http://localhost:1000/')
})