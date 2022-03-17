let cursos = ["Programación", "MKT", "UX", "Data Science", "UX"];

// Destructuración de arrays

let[programacion, mkt] = cursos;
/*
console.log(cursos);
console.log(programacion);
console.log(mkt);
*/

const persona = {
    nombre : "Carli",
    edad : 26,
    domicilio : "Calle falsa 123"
}

// Destructuración de objetos literales
let {nombre, edad} = persona;

console.log(persona);
console.log(nombre);
console.log(edad);


let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ ,bariloche, , china] = destinosDelMundo;


let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca, color} = auto;