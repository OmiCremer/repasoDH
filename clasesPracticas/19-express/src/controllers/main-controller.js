const path = require("path");
//es un objeto que va a tener diferentes funciones
// y una mejor organización de la web, asi en cada archivo el código es mas entendible y fácil de leer

const controller = {
  home: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
    //la Funcion join esta en path(path es una variable), ejecútala, con los parámetros
    //le ordeno que envié algo, este caso file
  },
  about: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
    //__dirname es una ruta absoluta, podemos armar una ruta relativa
  },
};

module.exports = controller;
//exports es una propiedad del objeto module, y exportamos a controller
//la idea es desacoplar todo por sectores, asi cada uno puede trabajar sin afectar al otro
//para no tocar todos los archivos del proyecto en caso de modificaciones y una mejor materialidad
