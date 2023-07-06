"use strict";
// ===== CONSTANTES ======
// Establecemos el máximo de estudiantes del aula
const maxEstudiantes = 30;
class Aula {
    constructor(newMateria) {
        this.identificador = this.generarIdentificador();
        this.max_estudiantes = maxEstudiantes;
        this.materia_asignada = newMateria;
    }
    // ===== SETTETS ======
    setIdentificador(newIdentificador) {
        this.identificador = newIdentificador;
    }
    setMaxEstudiantes(newMax) {
        this.max_estudiantes = newMax;
    }
    setMateria(newMateria) {
        this.materia_asignada = newMateria;
    }
    // ===== GETTERS ======
    getIdentificador() {
        return this.identificador;
    }
    getMaxEstudiantes() {
        return this.max_estudiantes;
    }
    getMateria() {
        return this.materia_asignada;
    }
    // ====== MÉTODOS ======
    generarIdentificador() {
        let id;
        id = Math.floor(Math.random() * (9999 - 1000 + 1) * 1000);
        return id;
    }
}
