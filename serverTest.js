const net = require("net");
const fs = require("fs");
const path = require("path");
const PORT = 8088;

const server = net.createServer((socket) => {
    console.log("Connection established");

    socket.on("data", () => {
        console.log("Received request from client");

        // Read the image file
        const imagePath = "C:\\Users\\12235\\Documents\\re-decentralized_internet\\tcp-rdi\\Pikachu.png";
        fs.readFile(imagePath, (err, imageBuffer) => {
            if (err) {
                console.error("Error reading the image:", err);
                return;
            }

            // Send the image data to the client
            socket.end(imageBuffer);
        });
    });
});

server.listen(PORT, () => console.log("Server is listening on port:", PORT));
