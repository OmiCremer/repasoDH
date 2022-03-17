//for (let i = 0; index < numero; i++) {};


const listaDeAlumnos = [
    {
        nombre: "Omar",
        promedio: 6,
        aprobado: false,
    },
     {
        nombre: "Tomy",
        promedio: 10,
        aprobado: true,
    }
];

for (const alumno of listaDeAlumnos) {
    console.log(alumno);
    if (alumno.promedio >= 7) {
        alumno.aprobado = true;
    } else {
        alumno.aprobado = false;
    }
    console.log(alumno);
}


// forOf, es especifico para recorrer arrays yes mas codo de usar si es lo que necesito es el elemento del array

const alumno = {
        nombre: "Omar",
        promedio: 6,
        aprobado: false,
    }
;

for (const key in alumno) {
    console.log(key + ": "+alumno[key]);
}

//forin me permite recorrer las propiedades de un objeto. permite imprimir las distintas propiedades del objeto