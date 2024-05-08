// const express = require("express");
// const app = express();
// const { Navigator } = require("node-navigator");
// const navigator = new Navigator();

// function updateCoordinates(){
//     if('geolocation' in navigator){
//         console.log("Location Available");
//         navigator.geolocation.getCurrentPosition(position => {
//             console.log(position.latitude);
//             console.log(position.longitude);
//         });
//     }
//     else{
//         console.log("Location Not Available");
//     }
// };

// const interval = setInterval(updateCoordinates, 2000);

// app.get("/", (req, res) => {
//     res.send("SERVER RUNNIN")
// });

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http:..localhost:${PORT}`);
// });



// let id;

// function success(pos) {
//   const crd = pos.coords;
//   var count = 5; 
  
//   if(count < 5){
//     console.log(crd.latitude);
//     console.log(crd.longitude);
//     count++;
//   }
//   else{
//     navigator.geolocation.clearWatch(id);
//   }

// }

// function error(err) {
//   console.error(`ERROR(${err.code}): ${err.message}`);
// }

// id = navigator.geolocation.watchPosition(success, error);


// navigator.geolocation = updateCoordinates; 

// function updateCoordinates() {
//     if ('geolocation' in navigator) {
//         console.log("Location Available");
//         const watchId = navigator.geolocation.watchPosition(
//             position => {
//                 console.log(position.coords.latitude);
//                 console.log(position.coords.longitude);
//             },
//             error => {
//                 console.error("Error getting location:", error);
//             }
//         );

//         // For testing purposes, stop watching after 10 seconds
//         setTimeout(() => {
//             navigator.geolocation.clearWatch(watchId);
//         }, 10000);
//     } else {
//         console.log("Location Not Available");
//     }
// };

// const interval = setInterval(updateCoordinates, 2000);

// app.get("/", (req, res) => {
//     res.send("SERVER RUNNING");
// });

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });





const express = require("express");
const app = express();

// Serve static files (including index.html)
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

