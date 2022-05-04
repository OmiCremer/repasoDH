const express = require("express");
/* 1ro tenemos que require express
 */

const router = express.Router();
/* usamos router de express nos va  a traer los componentes necesarios 
para definir las rutas de un recurso en particular
*/

router.get("/:idProducto", function (req, res) {
  res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
});

router.get("/:idProducto/comentarios/:idComentario?", function (req, res) {
  if (req.params.idComentario == undefined) {
    res.send(
      "Bienvenidos a los comentarios del producto " + req.params.idProducto
    );
  } else {
    res.send(
      "Bienvenidos a los comentarios del producto " +
        req.params.idProducto +
        " y estas enfocado en el comentario " +
        req.params.idComentario
    );
  }
});

/* de este modo ahora tenemos todas las rutas del recurso de productos
  divididas en el archivo que le corresponde
*/

/* para que esto funcione NO nos tenemos que olvidar de exportar la variable 
importante que corresponde 
*/

module.exports = router;
