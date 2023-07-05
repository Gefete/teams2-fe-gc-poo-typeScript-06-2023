"use strict";
class Materia {
    constructor() {
        this.nombre = this.generarMateria();
    }
    generarMateria() {
        let materias = ["Matemáticas", "Filosofía", "Física"];
        let materia;
        materia = materias[Math.floor(Math.random() * materias.length)];
        return materia;
    }
}
