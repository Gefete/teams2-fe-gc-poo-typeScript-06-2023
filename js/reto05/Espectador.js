"use strict";
class Espectador extends Persona {
    constructor() {
        super();
        this.edad = Math.floor(Math.random() * 70) + 4;
        this.dinero = Math.floor(Math.random() * 50);
    }
    getMoney() {
        return this.dinero;
    }
    getAge() {
        return this.edad;
    }
    toString() {
        return this.name + " " + this.lastName + " edad: " + this.edad + " dinero: " + this.dinero;
    }
}
