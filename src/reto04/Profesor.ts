
// ===== CONSTANTES =====
// Nos dicen que la posibilidad de no asistencia del profesor es del 20%
const noAsistencia = 20;

class Profesor extends Persona2 {

    private asistencia: boolean;
    private materia: string;

    constructor(newNombre: string, newEdad: number, newSexo: tiposSexo, newMateria: string) {
        
        super(newNombre, newEdad, newSexo);
        this.asistencia = super.disponibilidadPersona(noAsistencia);
        this.materia = newMateria;
    }

    setMateria (newMateria: materias) : void {

        this.materia = newMateria;
    }
    
    setAsistencia (newAsistencia: boolean) : void {

        this.asistencia = newAsistencia;
    }
    
    getMateria () : string{

        return this.materia;
    }

    getAsistencia () : boolean{

        return this.asistencia;
    }

}