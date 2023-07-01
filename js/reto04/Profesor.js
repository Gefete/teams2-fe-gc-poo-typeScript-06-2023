"use strict";
class Profesor extends Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }
    disponibilidadPersona() {
        let random_numA = Math.floor(Math.random() * 5);
        let random_numB = Math.floor(Math.random() * 5);
        return random_numB === random_numA ? false : true;
    }
}
