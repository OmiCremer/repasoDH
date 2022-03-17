const amigos = ["Omar", "Pablito", "Matías", "Joako"];
//console.log(amigos);

const amigosJSON = JSON.stringify(amigos);
//console.log(amigosJSON);

const amigosOriginal = JSON.parse(amigosJSON);
//console.log(amigosOriginal);

// objetos

const persona = {
    nombre : "Omar",
    edad : 40,
    domicilio : "Lavalle 754"

}

console.log(persona);

const personaJSON = JSON.stringify(persona);
//objeto convertido en un string

console.log(personaJSON);


const personaOriginal = JSON.parse(personaJSON);
//recibe un string, y dependiendo del caso lo convierte en un objeto

console.log(personaOriginal);

