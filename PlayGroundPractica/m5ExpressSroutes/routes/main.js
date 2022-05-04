const express = require("express");
/* 1ro tenemos que require express
 */

const router = express.Router();

router.get("/", function (req, res) {
  res.send("bienvenidos al sitio!!!");
});

router.get("/contacto", function (req, res) {
  res.send("Dejanos tu contacto");
});

module.exports = router;
