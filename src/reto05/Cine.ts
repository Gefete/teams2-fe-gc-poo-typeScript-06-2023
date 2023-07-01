

class Cine{
    // 1-Atributos
    // private
    private asientos:Object[][];
    private peliculas:Pelicula[];
    private precio_entrada:number;
    private espectadores:Espectador[];

    // Constructor
    constructor(){

    }

    // Metodos
    //3-Métodos propios
    controlAcceso(dinero:number, edad:number, title:String): boolean {
        let pelicula = peliculas.find(pel => pel.titulo === title);
        if(dinero>=precio_entrada && edad>=pelicula.get)
        
    }

    asignarAsientos(){
        
    }

    crearAsientos():void {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 9; j++) {
                this.asientos[i][j] = {"letra":String.fromCharCode(65+j),"fila":8-i,"ocupado":false};
            } 
        }
    }

    
}