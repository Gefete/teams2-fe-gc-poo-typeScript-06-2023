"use strict";
// ===== CONSTANTES =====
// Nos dicen que la posibilidad de no asistencia del profesor es del 20%
const noAsistencia = 20;
class Profesor extends Persona2 {
    constructor(newNombre, newEdad, newSexo, newMateria) {
        super(newNombre, newEdad, newSexo);
        this.asistencia = super.disponibilidadPersona(noAsistencia);
        this.materia = newMateria;
    }
    setMateria(newMateria) {
        this.materia = newMateria;
    }
    setAsistencia(newAsistencia) {
        this.asistencia = newAsistencia;
    }
    getMateria() {
        return this.materia;
    }
    getAsistencia() {
        return this.asistencia;
    }
}
