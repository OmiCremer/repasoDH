const fechaActual = new Date(1981, 6, 24);

let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("hoy es el dia que nací: el " + dia + " de " + meses[mes] + " de " + anio);

// Herramienta que se utiliza para hacer fechas dinámica dentro del nuestro desarrollo