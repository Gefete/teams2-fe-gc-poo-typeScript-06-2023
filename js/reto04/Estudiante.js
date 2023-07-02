"use strict";
/* type typeSexo = 'H' | 'M'; */
class Estudiante extends Persona2 {
    constructor(newEdadMinima, newEdadMaxima, materia) {
        super(newEdadMinima, newEdadMaxima);
        /* this.materia = new Materia(); */ //<--Es realmente necesario meter un argumento, 
        // ¿la clase no lo genera aleatoriamente la asignatura? 
        this.calificacion = Math.floor(Math.random() * 10);
    }
    disponibilidadPersona() {
        let random_numA = Math.floor(Math.random() * 5);
        let random_numB = Math.floor(Math.random() * 5);
        return random_numB === random_numA ? false : true;
    }
}
