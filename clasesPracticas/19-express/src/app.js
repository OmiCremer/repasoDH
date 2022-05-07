// importar express
const express = require("express");

//importar path para construir la ruta
const path = require("path");

//crear una app de express
const app = express();

// prendemos el servidor web
app.listen(3000, () => {
  console.log("Se puedo reservar el puerto");
});

//función que se llama Middleware, que sucede antes que un controlador. en medio de un pedido y un controlador
app.use(express.static(path.join(__dirname, "../public")));

const mainRouter = require("./routes/main-routes");
//importo mis rutas, indicando su ubicación

app.use("/", mainRouter);
// usa todas las rutas de mainRouter

//app.js es el punto de entrada de mi servidor, lo prende
//main-router en-rutar
//
