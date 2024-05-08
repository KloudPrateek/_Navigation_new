const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios")
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (including index.html)
app.use(express.static("public"));

const PORT = 3000;

io.on("connection", (socket) => {
    console.log("A user connected");

    // Receive coordinates from the client
    socket.on("coordinates", (data) => {
        console.log("Received Coordinates:", data.latitude, data.longitude);

        // Send coordinates to the Spring Boot server
        axios.post(`http://192.168.51.169:8080/api/map-matching`, {
            latitude: data.latitude,
            longitude: data.longitude
        })
        .then(response => {
            console.log("Mapped Coordinates:", response.data);

            // Send the mapped coordinates back to the client
            // socket.emit("mappedCoordinates", response.data);
        })
        .catch(error => {
            console.error("Error sending coordinates to Spring Boot server:", error);
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
