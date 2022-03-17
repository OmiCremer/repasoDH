const laMitad = numero => numero / 2;

console.log(laMitad(4));

const dividir = (numeroA, numeroB) => numeroA / numeroB;

console.log(dividir(20, 4));

const tengoQueTrabajar = dia => {
    if(dia == 'Sábado' || dia == 'Domingo'){
        return 'No tenes que trabajar';
    }else{
        return 'Si, Nacho, tenes que ir a trabajar';
    };

};

console.log(tengoQueTrabajar('Sábado'));

let saludar = (nombre, apellido) => ('Hola, ' + nombre + ' ' +  apellido + '!');