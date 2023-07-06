"use strict";
// ===== CONSTANTES =====
// La no asistencia de un alumno es del 50%
const novillos = 50;
class Estudiante extends Persona2 {
    // ===== CONSTRUCTOR ======
    constructor(newNombre, newEdad, newSexo, newCalificacion) {
        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
        this.asistencia = super.disponibilidadPersona(novillos);
    }
    // ===== SETTERS ======
    setCalificacion(newCalificacion) {
        this.calificacion = newCalificacion;
    }
    setAsistencia(newAsistencia) {
        this.asistencia = newAsistencia;
    }
    // ===== GETTERS ======
    getCalificacion() {
        return this.calificacion;
    }
    getAsistencia() {
        return this.asistencia;
    }
}
