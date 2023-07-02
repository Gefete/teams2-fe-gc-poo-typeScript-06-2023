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
}
