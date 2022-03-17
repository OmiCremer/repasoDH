// Leer el archivo tareas.json
// Importar el archivo json <--- string (leer el texto  ue tiene el archivo)
// Importar el modulo para interactuar con el sistema de archivo ('fs')
const fs = require ("fs");
// leer el archivo usando fs
const textoJSON = fs.readFileSync("./tareas.json", "utf-8");

// descomprimir/ traducir el archivo json <--- array con objetos
// guardar mis array de objetos en una variable
const tareas = JSON.parse(textoJSON);


// Imprimir todas las tareas en la terminal
// Recorrer ese array en "tareas"
//for (let i = 0; i < tareas.length; i++) {
    // Por cada una de las tareas en ese array
    // >> asignar a una variable llamada "tarea"
    //const tarea = tareas[i];
    // >> Si el estado de la tarea es "Pendiente"
    //if(tarea.estado == "Pendiente"){
    // >>>> Imprimir el titulo de la tarea 
    //console.log(tarea.titulo)  
//};
//}

console.log(process.argv);

// process ya esta disponible en la librería




