"use strict";
class Espectador extends Persona {
    constructor() {
        super();
        this.edad = Math.floor(Math.random() * 70) + 4;
        this.dinero = Math.floor(Math.random() * 50);
    }
}
