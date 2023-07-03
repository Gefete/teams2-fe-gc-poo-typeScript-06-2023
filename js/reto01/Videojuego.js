"use strict";
class Videojuego /* implements I */ {
    constructor(titulo, genero, compania) {
        this.horas_estimadas = 10;
        this.entregado = false;
        this.titulo = titulo;
        this.genero = genero;
        this.compania = compania;
    }
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horas_estimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horas_estimadas) {
        this.horas_estimadas = horas_estimadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
    }
    toString() {
        return `Título: ${this.titulo}, Horas estimadas: ${this.horas_estimadas}, Entregado: ${this.entregado ? "si" : "no"}, Género: ${this.genero}, Compañia: ${this.compania}`;
    }
}
