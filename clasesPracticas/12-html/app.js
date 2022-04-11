const express = require("express");
const app = express();

const path = require("path");

app.listen(3003, () => {
    console.log("Servidor Corriendo, 3003");
});

// Métodos de HTTP
// - GET
// - POST
// - PUT

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "views/index.html"));
});