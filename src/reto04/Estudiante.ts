const novillos = 50;

class Estudiante extends Persona2 {

    private calificacion: number;
    private asistencia: boolean;

    constructor(newNombre: string, newEdad: number, newSexo: tiposSexo,
        newCalificacion: number){

        super(newNombre, newEdad, newSexo);
        this.calificacion = newCalificacion;
        this.asistencia = super.disponibilidadPersona(novillos);
    }

    getCalificacion (): number {
        
        return this.calificacion;
    }
    
    getAsistencia () : boolean {
        
        return this.asistencia;
    }
}