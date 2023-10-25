const net=require("net");
const PORT =80;
//const HOST="example.com"
// the element in the comment line
// read and take the third var in the console command
const HOST =process.argv[2];
//establish a TCP connection to a specified host and port
const socket= new net.Socket();

//customized implementation
//http request
const rawHttpRequest=`GET / HTTP/1.1\r\nHost: ${HOST}\r\n\r\n`;
//const rawHttpRequest="GET/HTTP/1.1\r\nHost:example.com\r\n";
// make the host to connect port 80
socket.connect({
    port:PORT,
    host:HOST,
});

// connect the https to see if establish and then close the socket
socket.on("connect", ()=>{
    console.log("TCP connection established.");
    //write the request to the server, the socket connection
    //connect to another computer
    socket.write(rawHttpRequest);
    socket.end();
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