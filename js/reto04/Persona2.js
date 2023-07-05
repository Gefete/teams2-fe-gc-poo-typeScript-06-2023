"use strict";
//  ===== CONSTANTES =====
const edadMinima = 12;
const edadMaxima = 16;
class Persona2 {
    //  ===== CONSTRUCTOR =====
    constructor(newNombre, newEdad, newSexo) {
        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
    }
    //  ===== SETTERS =====
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
    setEdad(newEdad) {
        this.edad = newEdad;
    }
    setSexo(newSexo) {
        this.sexo = newSexo;
    }
    //  ===== GETTERS =====
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getSexo() {
        return this.sexo;
    }
    //  ===== tostring() =====
    tostring() {
        console.log(this.nombre + " tiene " + this.edad + " años y es " + this.sexo);
    }
    //  ===== MÉTODOS =====
    // Asigno una disponibilidad, según el % de probabilidad deseada que se introduzca
    disponibilidadPersona(newProbabilidad) {
        let asistencia;
        // Lo divido entre 10 para poder sacar un decimal entre 0-1 para compararlo con el 
        // que sale de Math.random
        let probabilidad = newProbabilidad / 100;
        // Si el random generado es mayor que la probabilidad, la persona asiste
        asistencia = Math.random() >= probabilidad;
        return asistencia;
    }
}
