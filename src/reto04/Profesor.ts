/* type typeSexo = 'H' | 'M'; */
class Profesor extends Persona2 {
    protected materia:Materia;

    constructor(newEdadMinima: number, newEdadMaxima: number, materia:Materia){
        super(newEdadMinima,newEdadMaxima);
        this.materia = materia;
    }

    disponibilidadPersona():boolean {
        let random_numA = Math.floor(Math.random()*5);
        let random_numB = Math.floor(Math.random()*5);
        return random_numB === random_numA ? false : true;
    }
}