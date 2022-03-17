const multiplicar = require("./multiplicar");
const sumar = require("./sumar");
const dividir = require("./dividir");
const restar = require("./restar");



module.exports = { 
    restar: (numeroA, numeroB) =>{
        const resultado = numeroA - numeroB;
        return resultado;
    },
    sumar: (numeroA, numeroB) => {
        
        const resultado = numero + numeroB;
        return resultado;
    },
    multiplicar: (numeroA, numeroB) => {
        //si numeroA es 0 o numeroB es igual a 0
        //el resultado es 0
        if(numeroA == 0 || numeroB == 0){
            return 0;
        }
        const resultado = numero * numeroB;
        return resultado;
    },
    dividir: (numeroA, numeroB) => {
        if(numeroA == 0 || numeroB == 0){
            return 0;
        }
        const resultado = numeroA / numeroB;
        return resultado;
    },
};



console.log(multiplicar(0,10));
console.log(sumar(2,10));
console.log(dividir(10,0));
console.log(restar(10,2));
