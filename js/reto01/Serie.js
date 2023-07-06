"use strict";
//  ===== CONSTANTES ======
const defectoGenero = "Drama";
const defectoTemporadas = 3;
const defectoEntregado = false;
//  ===== CONSTRUCTOR ======
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
        return this.titulo +
            " tiene " +
            this.temporadas +
            " temporadas, es del género " +
            this.genero +
            " y fue creada por " +
            this.creador;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        if (a instanceof Serie) {
            if (this.temporadas > a.getTemporadas())
                return -1;
            else if (this.temporadas === a.getTemporadas())
                return 0;
            else
                return 1;
        }
        else {
            return -1;
        }
    }
}
