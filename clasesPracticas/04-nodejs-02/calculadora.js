// requerir o importar la función sumar
const sumar = require("./sumar");
// requerir o importar la función restar
const restar = require("./restar");

const dividir = require("./dividir");
const multiplicar = require("./multiplicar");
//ejecutar la función sumar con dos números: 10 y 5
const multiplicar1 = multiplicar(10, 5);
const dividir2 = dividir(10, 5);
const restar3 = restar(10, 5);
const sumar4 = sumar(10, 5);

console.log(multiplicar1);
console.log(dividir2);
console.log(restar3);
console.log(sumar4);

// mostrar el resultado en la terminal