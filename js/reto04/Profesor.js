"use strict";
/* type typeSexo = 'H' | 'M'; */
class Profesor extends Persona2 {
    constructor(newEdadMinima, newEdadMaxima, materia) {
        super(newEdadMinima, newEdadMaxima);
        this.materia = materia;
    }
    disponibilidadPersona() {
        let random_numA = Math.floor(Math.random() * 5);
        let random_numB = Math.floor(Math.random() * 5);
        return random_numB === random_numA ? false : true;
    }
}
