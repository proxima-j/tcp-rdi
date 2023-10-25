const net=require("net");
const PORT =8888;
//const HOST="example.com"
// the element in the comment line
const HOST ="10.18.157.36";
//establish a TCP connection to a specified host and port
const socket= new net.Socket();


socket.connect({
    port:PORT,
    host:HOST,
});

// connect the https to see if establish and then close the socket
socket.on("connect", ()=>{
    console.log("TCP connection established.");
    socket.write("Hello from client.");
})
// // print out the data
socket.on("data", (data)=>{
    console.log(data.toString());
    socket.end();
})

socket.on("end",()=>{
    console.log("TCP connection ended.")
})

// show the data