// ===== CONSTANTES =====
// La no asistencia de un alumno es del 50%
const novillos = 50;

class Estudiante extends Persona2 {

    private calificacion: number;
    private asistencia: boolean;

    // ===== CONSTRUCTOR ======

    constructor(newNombre: string, newEdad: number, newSexo: tiposSexo,
        newCalificacion: number){

        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
        this.asistencia = super.disponibilidadPersona(novillos);
    }

    // ===== SETTERS ======

    setCalificacion (newCalificacion: number) : void {

        this.calificacion = newCalificacion;
    }
    
    setAsistencia (newAsistencia: boolean) : void {

        this.asistencia = newAsistencia;
    }
    
    // ===== GETTERS ======

    getCalificacion (): number {
        
        return this.calificacion;
    }
    
    getAsistencia () : boolean {
        
        return this.asistencia;
    }
}