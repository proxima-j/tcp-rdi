const net = require("net");
const fs = require("fs");
const PORT = 8088;
const HOST = "localhost"; // Corrected to lowercase "localhost"

const socket = new net.Socket();
let responseData = Buffer.from([]); // Store the received response data as a buffer

socket.connect({
    port: PORT,
    host: HOST,
});

socket.on("connect", () => {
    console.log("TCP connection established.");
    socket.write("Hello from client.");
});

socket.on("data", (data) => {
    // Append the received data to the responseData buffer
    responseData = Buffer.concat([responseData, data]);
});

socket.on("end", () => {
    console.log("TCP connection ended.");

    // Save the image data to a file
    fs.writeFileSync("received_image.png", responseData);
    console.log("Received and saved image as 'received_image.png'");
});
