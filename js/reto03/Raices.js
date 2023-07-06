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
    getDiscriminante() {
        let discriminante;
        discriminante = (Math.pow(this.b, 2)) - 4 * this.a * this.c;
        return discriminante;
    }
    // El discriminante puede ser positivo, cero o negativo y esto determina cuántas soluciones 
    // (o raíces) existen para la ecuación cuadrática dada.
    // Un discriminante positivo indica que la cuadrática tiene dos soluciones reales distintas.
    tieneRaices() {
        return this.getDiscriminante() > 0 ? true : false;
    }
    // Un discriminante de cero indica que la cuadrática tiene una solución real repetida.
    tieneRaiz() {
        return this.getDiscriminante() === 0 ? true : false;
    }
    // Metodo que coge los metodos obtenerRaices y obtenerRaiz segun los metodos tieneRaices o tieneRaiz lo indique
    calcular() {
        if (this.tieneRaices()) {
            this.obtenerRaices();
        }
        else if (this.tieneRaiz()) {
            this.obtenerRaiz();
        }
        else {
            console.log("no tiene solucion");
        }
    }
    // Metodo que calcula las 2 soluciones de la equaciones 2n grado
    obtenerRaices() {
        if (this.tieneRaices()) {
            let operacion2nGradopositive = (-this.b + Math.sqrt((Math.pow(this.b, 2)) - (4 * this.a * this.c))) / (2 * this.a);
            console.log(operacion2nGradopositive);
            let operacion2nGradonegative = (-this.b - Math.sqrt((Math.pow(this.b, 2)) - (4 * this.a * this.c))) / (2 * this.a);
            console.log(operacion2nGradonegative);
        }
        else {
            console.log("solo tiene una solucion");
        }
    }
    //  Metodo que calcula la solucion de la equaciones 2n grado en caso de que solo salga una segun el discriminante
    obtenerRaiz() {
        if (this.tieneRaiz()) {
            let operacion2nGradon = (-this.b - Math.sqrt((Math.pow(this.b, 2)) - (4 * this.a * this.c))) / (2 * this.a);
            console.log(operacion2nGradon);
        }
        else {
            console.log("No tiene una sola solucion");
        }
    }
}
