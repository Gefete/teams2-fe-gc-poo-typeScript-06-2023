
//  ===== CONSTANTES ======

const defectoGenero = "Drama";
const defectoTemporadas = 3;
const defectoEntregado = false;

class Serie /* implements IEntregable */{

//  ===== ATRIBUTOS ======

    private titulo: String;
    private temporadas: number;
    private entregado: boolean;
    private genero: String;
    private creador: String;

//  ===== CONSTRUCTOR ======

    constructor (newTitulo: String, newCreador: String){

        this.titulo = newTitulo;
        this.temporadas = defectoTemporadas;
        this.entregado = defectoEntregado;
        this.genero = defectoGenero;
        this.creador = newCreador;
    }

//  ===== SETTERS ======

setTitulo (newTitulo: String): void{

    this.titulo = newTitulo;
}

setTemporadas (newTemporadas: number): void{

    this.temporadas = newTemporadas;
}

setGenero (newGenero: String): void{

    this.genero = newGenero;
}

setCreador (newCreador: String): void{

    this.creador = newCreador;
}

//  ===== GETTERS ======

getTitulo (): String{

    return this.titulo;
}

getTemporadas (): number{

    return this.temporadas;
}

getGenero (): String{

    return this.genero;
}

getCreador (): String{

    return this.creador;
}

//  ===== toString ======

toString(): void{

    console.log(this.titulo+" tiene "+this.temporadas+" temporadas, es del género "+this.genero+" y fue creada por "+this.creador);
}

}