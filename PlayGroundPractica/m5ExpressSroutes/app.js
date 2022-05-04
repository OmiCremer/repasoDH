const express = require("express");
/* en app. js tenemos que traer el modulo recién creado
ya que  la carpeta routes se crea para modularisar
 la funcionalidad de la pagina y tener menos código en un solo archivo asi 
 es mas fácil de entender */

const rutasProductos = require("./routes/productos.js");
/* en app. js tenemos que traer el modulo recién creado
ya que  la carpeta routes se crea para modularisar
 la funcionalidad de la pagina y tener menos código en un solo archivo asi 
 es mas fácil de entender
 vamos a hacer una variable para traer las routes de productos con require*/
const rutasMain = require("./routes/main.js");
const app = express();

app.listen(3000, () => console.log("Esto fue exitoso"));

/* después de montar el servidor, vamos a usar la función app.use
  donde vamos a aclarar que todas las rutas que comiencen con el prefijo
  /productos van a ser respondidas con el archivo app.js
  que tenemos en la variable ruta de productos */

app.use("/productos", rutasProductos);
/* todas las rutas de /productos, van a ser respondidas
con esta variable creada app.use, ele archivo productos.js
*/
/* cada vez que se cree un archivo nuevo y un recurso nuevo en el entry point app.js
tenemos que agrear el app.use y el require correspondiente
*/
app.use("/", rutasMain);
