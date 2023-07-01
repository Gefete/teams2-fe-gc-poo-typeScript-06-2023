"use strict";
//  ===== CONSTANTES ======
const defectoGenero = "Drama";
const defectoTemporadas = 3;
const defectoEntregado = false;
class Serie {
    //  ===== CONSTRUCTOR ======
    constructor(newTitulo, newCreador) {
        this.titulo = newTitulo;
        this.temporadas = defectoTemporadas;
        this.entregado = defectoEntregado;
        this.genero = defectoGenero;
        this.creador = newCreador;
    }
    //  ===== SETTERS ======
    setTitulo(newTitulo) {
        this.titulo = newTitulo;
    }
    setTemporadas(newTemporadas) {
        this.temporadas = newTemporadas;
    }
    setGenero(newGenero) {
        this.genero = newGenero;
    }
    setCreador(newCreador) {
        this.creador = newCreador;
    }
    //  ===== GETTERS ======
    getTitulo() {
        return this.titulo;
    }
    getTemporadas() {
        return this.temporadas;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    //  ===== toString ======
    toString() {
        console.log(this.titulo + " tiene " + this.temporadas + " temporadas, es del género " + this.genero + " y fue creada por " + this.creador);
    }
}
