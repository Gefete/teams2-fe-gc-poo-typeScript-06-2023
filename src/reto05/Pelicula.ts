class Pelicula{
    // Vairable
    private titulo:string;
    private duracion:number;
    private edad_minima:number;
    private director:Persona;
    
    constructor(titulo:string,duracion:number,edad_minima:number,director:Persona){
        this.titulo = titulo;
        this.duracion = duracion;
        this.edad_minima = edad_minima;
        this.director = director;
    }
}