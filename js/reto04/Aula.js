"use strict";
const maxEstudiantes = 30;
class Aula {
    constructor(newMateria) {
        this.identificador = this.generarIdentificador();
        this.max_estudiantes = maxEstudiantes;
        this.materia_asignada = newMateria;
    }
    generarIdentificador() {
        let id;
        id = Math.floor(Math.random() * (9999 - 1000 + 1) * 1000);
        return id;
    }
}
