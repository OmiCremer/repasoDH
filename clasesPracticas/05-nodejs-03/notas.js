const estados = ["Pendiente", "En proceso", "Terminado"];

// Objeto literal de JavaScript
const tarea = {
    titulo: "Practicar el switch",
    estado: "Pendiente",  //¿Por que no es un boolean? por que son tres estados, se podría si en true o false, 2 estados
};

//¿Como obtengo la propiedad "titulo"?
//console.log(tarea.titulo);
tarea.titulo = "Practicar for";
//console.log(tarea.titulo);

//¿Que significa JSON?
//JavaScript Object Notation

//¿Para que sirve JSON?
// Para intercambiar datos entre el front y el back o entre sistemas o Almacenar datos (para guardar datos para próximas ejecuciones de la misma aplicación)

//¿Como seria un array de tareas?
const tareas = [
    tarea,
    {
        titulo: "Practicar el switch",
        estado: "Pendiente",

    },
    {
        titulo: "Practicar el for",
        estado: "En proceso",

    },
    {
        titulo: "Ir a comprar lavandina",
        estado:"Terminada",
        

    },
    tarea,
];
//¿Como obtengo la propiedad "titulo" de la tarea N 3?

//console.(log[2].titulo);
//console.log(tareas.indexOf(tarea));

//==============================================

const var1 = [];

const var2 = [];

console.log(var1 === var2);

//el resultado es false ya que tiene el mismo valor pero a su vez son diferentes.

const var3 = [];

const var4 = var3;

console.log(var3 === var4);

// para que el resultado de true se le tiene que asignar exactamente el mismo valor


