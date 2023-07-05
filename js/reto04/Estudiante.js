"use strict";
const novillos = 50;
class Estudiante extends Persona2 {
    constructor(newNombre, newEdad, newSexo, newCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
        this.asistencia = super.disponibilidadPersona(novillos);
    }
    getCalificacion() {
        return this.calificacion;
    }
    getAsistencia() {
        return this.asistencia;
    }
}
