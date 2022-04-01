const express = require ('express');
const path = require ('path');

const app = express(); 

app.listen(3000, () => {
    console.log('Servidor corriendo, exitoso')
    // por buena costumbre se realiza de esta forma, para que  en consola se imprima y saber que esta corriendo de forma correcta
});
/*
app.get('/', function (req, res) {
    res.send('Bienvenidos al sitio, para compras de bicicletas');
});
*/
app.get ("/", (req, res) => {
    const htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
})
/*
// cada función va a tener la consecuencia de cada ciclo
app.get('/contacto', function (req, res) {
    res.send('contactarnos por Whats app');
});

app.get('/un-array', function (req, res) {
    res.send([1, 2, 3, 4]);
});
app.get('/un-objeto', function (req, res) {
    res.send({'name': 'Omar'});
});

const producto = {
    tipoProducto : null,
    precio : null ,
    cantidad: null
    };
    
    app.get ("/producto/agregar", function (req, res){
        res.send (producto);
    });

    app.get ("/404", (req, res) => {
        res.send ("Error página no encontrada");
    })
    */