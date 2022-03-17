let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(18, 3, dividir));
console.log(calculadora(18, 3, multiplicar));
console.log(calculadora(18, 3, restar));
console.log(calculadora(18, 3, sumar));

function agregarHttp(url) {
    return "http://" + url;
     // escribí tu código aquí
}

function procesar(urls, callback){
    const result = [ ];
    for (let i = 0; i < urls.length; i++){
        const url = urls [i];
        result.push(callback(url));
    }
    return result;
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
}