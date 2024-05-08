const express = require("express");
const app = express();

// Serve static files (including index.html)
app.use(express.static("public"));

const PORT = 3000;

app.use(express.json());

app.post('/data', (req, res) => {
    console.log(req.body); // This will log { key: 'value' }
    res.send('Data received');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const PORT = 3000;

// io.on('connection', (socket) => {
//     console.log('A client connected');

//     // Assuming you have the coordinates available in latitude and longitude variables
//     const latitude = 40.7128;
//     const longitude = -74.0060;

//     // Send coordinates to the Spring Boot server
//     socket.emit('coordinates', { latitude, longitude });
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
