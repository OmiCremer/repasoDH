const curso = {
    cantidadDeAlumnos: 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario;
    }
}

function Cursos(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;

}



const cursoDeProgramacion = new Cursos(40, ["Nicolas", "Mariano"], "de 19 a 21hs.");
const cursoDeMarketing = new Cursos(30, ["Pilar", "Gregorio"], "de 17 a 19hs.");

console.log (cursoDeProgramacion);
console.log (cursoDeProgramacion);


//función constructora se declara con la letra en mayúscula 

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(horas){
            this.energia = this.energia - (horas*5);
            this.experiencia = this.experiencia + (horas*2);
            return this.energia;
            return this.experiencia; 
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
