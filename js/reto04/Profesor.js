"use strict";
const asistencia = 20;
class Profesor extends Persona2 {
    constructor(newNombre, newEdad, newSexo, newMateria) {
        super(newNombre, newEdad, newSexo);
        this.asistencia = super.disponibilidadPersona(asistencia);
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
