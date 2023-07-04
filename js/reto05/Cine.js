"use strict";
class Cine {
    // Constructor
    constructor(qntEspectator) {
        this.asientos = this.crearAsientos();
        this.precio_entrada = Math.floor(Math.random() * 2) + 10;
        this.peliculas = new Pelicula();
        this.espectadores = this.generateEspectators(qntEspectator);
    }
    // Metodos
    //3-Métodos propios
    controlAcceso(dinero, edad) {
        // let pelicula = peliculas.find(pel => pel.titulo === title);
        // console.log(this.peliculas.getEdadMinima());
        if (dinero >= this.precio_entrada && edad >= this.peliculas.getEdadMinima()) {
            return true;
        }
        else {
            return false;
        }
    }
    asignarAsientos() {
        let permitir = false;
        let row = 0;
        let col = 0;
        // Variables para tener registro de Espectadores que entran
        let plazasAsignadas = 0;
        let espectadoresRechazados = 0;
        let especAforoRechazado = 0;
        // Recorre la cantidad de gente que quiere entrar
        for (let i = 0; i < this.espectadores.length; i++) {
            // esta variable almacena si el espectador ha pasado los filtros
            permitir = this.controlAcceso(this.espectadores[i].getMoney(), this.espectadores[i].getAge());
            if (permitir && plazasAsignadas <= (this.asientos[0].length * this.asientos.length)) {
                let pass = false;
                while (!pass) {
                    row = Math.floor(Math.random() * 9);
                    col = Math.floor(Math.random() * 8);
                    if (!this.asientos[col][row].ocupado) {
                        this.asientos[col][row].ocupado = true;
                        this.asientos[col][row].persona = this.espectadores[i].toString(); //<--Asigna los valores del Espectador sentado al Object asiento
                        pass = true;
                        plazasAsignadas++;
                        // console.log("Plaza asinada");
                    }
                    // else{
                    //     console.log("Plaza no disponible buscar libre");
                    // }
                    if (plazasAsignadas >= (this.asientos[0].length * this.asientos.length)) {
                        // console.log("aforo maximo alcanzado");
                        // console.log(`Personas atendidas ${i+1} de ${this.espectadores.length} `);
                        pass = true;
                        especAforoRechazado++;
                    }
                }
            }
            else {
                espectadoresRechazados++;
                // console.log(this.espectadores[i])
                // console.log("no cumple los requisitos");
            }
            // console.log(`Persona atendida ${i+1} de ${this.espectadores.length}`);
        }
        console.log(`Personas dentro del cine ${plazasAsignadas}`);
        console.log(`Personas que se les ha rechazado el acceso por no cumplir requisitos ${espectadoresRechazados}`);
        console.log(`Personas que se les ha rechazado el acceso por alcanzar el maximo aforo ${especAforoRechazado}`);
    }
    crearAsientos() {
        let genAsientos = [];
        for (let i = 0; i < 8; i++) {
            genAsientos[i] = [];
            for (let j = 0; j < 9; j++) {
                genAsientos[i][j] = {
                    "letra": String.fromCharCode(65 + j),
                    "fila": 8 - i,
                    "ocupado": false,
                    "persona": ""
                };
            }
        }
        return genAsientos;
    }
    generateEspectators(cantidad) {
        let espectators = [];
        for (let i = 0; i < cantidad; i++) {
            espectators[i] = new Espectador();
        }
        return espectators;
    }
    getTituloPeli() {
        return this.peliculas.getTitulo();
    }
    getPrecio() {
        return this.precio_entrada + "€";
    }
    getAsientos() {
        return this.asientos;
    }
    getEdadMinima() {
        return this.peliculas.getEdadMinima();
    }
    toString() {
        this.peliculas.toString();
    }
}
