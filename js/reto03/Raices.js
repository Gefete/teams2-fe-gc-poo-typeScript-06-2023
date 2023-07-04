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
    //Metodos Gerard
    /*  • calcular(): mostrara por consola las posibles soluciones que tiene nuestra ecuación, en caso
        de no existir solución, mostrarlo también.
        • obtenerRaices(): imprime las 2 posibles soluciones
        • obtenerRaiz(): imprime única raíz, que será cuando solo tenga una solución posible.
        Formula ecuación 2º grado: (-b±√((b^2)-(4*a*c)))/(2*a)
        Solo varia el signo delante de -b */
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
