// ===== CONSTANTES ======
// Establecemos el máximo de estudiantes del aula
const maxEstudiantes: number = 30;

class Aula{

    private identificador: number;
    private max_estudiantes: number;
    private materia_asignada: string;

    constructor (newMateria: string) {

        this.identificador = this.generarIdentificador();
        this.max_estudiantes = maxEstudiantes;
        this.materia_asignada = newMateria;
    }

    // ===== SETTETS ======

    setIdentificador (newIdentificador: number) : void {

        this.identificador = newIdentificador;
    } 

    setMaxEstudiantes (newMax: number) : void {

        this.max_estudiantes = newMax;
    }

    setMateria (newMateria: string) : void {

        this.materia_asignada = newMateria;
    }

    // ===== GETTERS ======

    getIdentificador () : number {

        return this.identificador;
    } 

    getMaxEstudiantes () : number {

        return this.max_estudiantes;
    }

    getMateria () : string {

        return this.materia_asignada;
    }

    // ====== MÉTODOS ======

    generarIdentificador () : number{

        let id;

        id = Math.floor(Math.random()*(9999-1000+1)*1000);

        return id;
    }
}