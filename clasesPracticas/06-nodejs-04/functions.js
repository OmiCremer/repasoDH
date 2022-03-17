//**  Declarada 

pepito();

function pepito() {
    console.log("Hola mundo!");
}

pepito();

// ejecuta 2 hola mundo, va a funcionar.

//=============================

//** Expresada
/*
pepito();

const pepito = function ()  {
    console.log("Hola mundo!");
};

pepito();
*/
// al estar expresada, me va a dar un error ya que javascript empieza a ejecutar el código desde arriba. ejecuta la primera funcion pero la variable pepito aun no existe expresada entonces da error
