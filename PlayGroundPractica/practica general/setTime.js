/* setTimeout (function(){
    console.log('hola mundo')
} , 10000)

*/


// los 10000 es el tiempo de respuesta que demora en imprimir por consola

const miCallback = () => console.log ('hola mundo, tiempo de respuesta por consola');
setTimeout(miCallback, 1000);