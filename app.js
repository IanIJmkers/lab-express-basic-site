const express = require ("express");
const app = express();
const PORT = 5000;

//All the routes here
app.get("/nikis_best", (req, res) => {
    res.sendFile(__dirname + '/views/niki.html')
});

//First thing is to listen to a port and start the server
app.listen(PORT, () => {
    console.log("Welcome To Niki's best version");
});
