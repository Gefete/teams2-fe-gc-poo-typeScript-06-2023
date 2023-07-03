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

    generarIdentificador () : number{

        let id;

        id = Math.floor(Math.random()*(9999-1000+1)*1000);

        return id;
    }
}