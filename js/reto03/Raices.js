"use strict";
class Raices {
    //  ===== CONSTRUCTOR =====
    constructor(newA, newB, newC) {
        this.a = newA;
        this.b = newB;
        this.c = newC;
    }
    //  ===== SETTERS =====
    setA(newValue) {
        this.a = newValue;
    }
    setB(newValue) {
        this.b = newValue;
    }
    setC(newValue) {
        this.c = newValue;
    }
    //  ===== GETTERS =====
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
    getC() {
        return this.c;
    }
    //  ===== MÉTODOS =====
    getDiscriminante(aValue, bValue, cValue) {
        let discriminante;
        discriminante = (Math.pow(bValue, 2)) - 4 * aValue * cValue;
        return discriminante;
    }
    // El discriminante puede ser positivo, cero o negativo y esto determina cuántas soluciones 
    // (o raíces) existen para la ecuación cuadrática dada.
    // Un discriminante positivo indica que la cuadrática tiene dos soluciones reales distintas.
    tieneRaices(aValue, bValue, cValue) {
        return this.getDiscriminante(aValue, bValue, cValue) > 0 ? true : false;
    }
    // Un discriminante de cero indica que la cuadrática tiene una solución real repetida.
    tieneRaiz(aValue, bValue, cValue) {
        return this.getDiscriminante(aValue, bValue, cValue) === 0 ? true : false;
    }
}
