const express = require("express");
const app = express();

// Serve static files (including index.html)
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

