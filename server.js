const { createServer } = require("http");
const net =require("net");
const PORT =8008;
// const server = net.createServer((socket)=>{
//     console.log("Connection established with: ", socket );
// });
// read the information that the client write and send response back to client
const server = net.createServer((socket)=>{
    console.log("Connection established");
    socket.on("data", (data) =>{
        console.log(data.toString());
        // write on the server when receiving data from the client
        socket.write("Hello from the server.");
        socket.end();
    });
});
server.listen(PORT, ()=>console.log("Server is listening on port: ", PORT));