//  ===== CONSTANTES =====

type tiposSexo = "Hombre" | "Mujer";
const edadMinima: number = 12;
const edadMaxima: number = 16;

class Persona2{

//  ===== ATRIBUTOS =====

        protected nombre: string;
        protected edad: number;
        protected sexo: tiposSexo;

//  ===== CONSTRUCTOR =====

    constructor (newNombre: string, newEdad: number, newSexo: tiposSexo) {

        this.nombre = newNombre;
        this.edad = newEdad;
        this.sexo = newSexo;
    }

//  ===== SETTERS =====

    setNombre (newNombre: string): void{

        this.nombre = newNombre;
    }

    setEdad (newEdad: number): void{

        this.edad = newEdad;
    }

    setSexo (newSexo: tiposSexo): void{

        this.sexo = newSexo;
    }

//  ===== GETTERS =====

    getNombre (): string{

        return this.nombre;
    }

    getEdad (): number{

        return this.edad;
    }

    getSexo (): tiposSexo{

        return this.sexo;
    }

//  ===== tostring() =====

    tostring(): void{

        console.log(this.nombre+" tiene "+this.edad+" años y es "+this.sexo);
    }

//  ===== MÉTODOS =====

    // Asigno una disponibilidad, según el % de probabilidad deseada que se introduzca
    disponibilidadPersona(newProbabilidad: number): boolean{

        let asistencia;
        // Lo divido entre 10 para poder sacar un decimal entre 0-1 para compararlo con el 
        // que sale de Math.random
        let probabilidad = newProbabilidad/100;

        // Si el random generado es mayor que la probabilidad, la persona asiste
        asistencia = Math.random() >= probabilidad;

        return asistencia;
    }

}