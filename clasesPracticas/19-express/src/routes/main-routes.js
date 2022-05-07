const express = require("express");
const router = express.Router();
//router es una función de express. esta declaración crea un nuevo router

const mainController = require("../controllers/main-controller");
//definir una ruta
//  -> Método de HTTP: GET(obtener o acceder, puede ser re-ejecutable), POST(crear algo nuevo), DELETE, PUT/ PATCH(actualizar algo ya creado)
//  -> Ruta o path: "/"
//  -> "Que va a pasar cuando se comuniquen a esa ruta por ese método" -> Handler o Controlador

// GET /series
router.get("/", mainController.home);
//después de la coma referencio la ubicación de los controladores
router.get("/about", mainController.about);

module.exports = router;
