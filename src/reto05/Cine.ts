class Cine{
    // 1-Atributos
    // private
    private asientos:IAsiento [][];
    private peliculas:Pelicula;
    private precio_entrada:number;
    private espectadores:Espectador[];

    // Constructor
    constructor(qntEspectator:number, pelicula:Pelicula, espectadorArray:Espectador[]){
        this.asientos = this.crearAsientos(); 
        this.precio_entrada = Math.floor(Math.random() * 2)+10;
        this.peliculas = pelicula;
        this.espectadores= espectadorArray;
    }

    // Metodos
    //---3-Métodos propios
    
    //Este metodo controla el acceso de los espectadores
    controlAcceso(dinero:number, edad:number): boolean {
        if(dinero >= this.precio_entrada && edad >= this.peliculas.getEdadMinima()){
            return true;
        }else{
            return false;
        }
    }

    // Metodo que asigna a los espectadores (que pasan el filtro) un asiento, tambien marca cuando el aforo se ha completado
    asignarAsientos(){
        let permitir:boolean = false;
        let row=0;
        let col=0;
        // Variables para tener registro de Espectadores que entran
        let plazasAsignadas=0;
        let espectadoresRechazados=0;
        let especAforoRechazado=0;
        // Recorre la cantidad de gente que quiere entrar
        for (let i = 0; i < this.espectadores.length; i++) {
            // esta variable almacena si el espectador ha pasado los filtros
            permitir = this.controlAcceso(this.espectadores[i].getMoney(), this.espectadores[i].getAge());
            
            if(permitir && plazasAsignadas<=(this.asientos[0].length*this.asientos.length)){
                let pass:boolean=false;
                while(!pass){
                    row = Math.floor(Math.random() * 9);
                    col = Math.floor(Math.random() * 8);
                    if (!this.asientos[col][row].ocupado){
                        this.asientos[col][row].ocupado = true;
                        this.asientos[col][row].persona = this.espectadores[i].toString(); //<--Asigna los valores del Espectador sentado al Object asiento
                        pass=true;
                        plazasAsignadas++;
                        // console.log("Plaza asinada");
                    }
                    else{
                        // Notifica que el sitio seleccionado ya estaba ocupado
                        console.log("La plaza seleccionada esta ocupada buscando plaza libre");
                    }
                    // Condicional en el que se comprueba si las 72 plazas (filas*columnas) estan ocupadas
                    if(plazasAsignadas>=(this.asientos[0].length*this.asientos.length)){
                        // Notifica que el aforo esta al maximo
                        console.log("aforo maximo alcanzado");
                        // Comprovante que finaliza el While
                        pass=true;
                        // registra rechazados que han pasado el filtro pero el aforo esta al maximo
                        especAforoRechazado++;
                    }
                }
            }
            else{
                // No pasan el filtro
                espectadoresRechazados++;
                console.log(this.espectadores[i])
                console.log("no cumple los requisitos");
            }
            //Notifica la persona a la que ha atendido de la cola
            console.log(`Persona atendida ${i+1} de ${this.espectadores.length}`);
        }
        // Imprime el registro de la cola de clientes
        console.log(`Personas dentro del cine ${plazasAsignadas}`);
        console.log(`Personas que se les ha rechazado el acceso por no cumplir requisitos ${espectadoresRechazados}`)
        console.log(`Personas que se les ha rechazado el acceso por alcanzar el maximo aforo ${especAforoRechazado}`)
    }

    // Metodo que crea el Objeto asientos, utiliza una interfaz para que el programa detecte los atributos
    //Sin la interfaz los atributos no se pueden llamar
    crearAsientos() : IAsiento [][] {
        let genAsientos:IAsiento[][]=[];
        // Doble bucle para recorrer el multiarray (filas y columnas)
        for (let i = 0; i < 8; i++) {
            genAsientos[i] = [];
            for (let j = 0; j < 9; j++) {
                genAsientos[i][j] = {
                    "letra":String.fromCharCode(65+j),
                    "fila":8-i,
                    "ocupado":false,
                    "persona":""
                };
            } 
        }
        // Devuelve el multiarray
        return genAsientos;
    }

    // ========== GETTERS ==============
    getTituloPeli():string{
        return this.peliculas.getTitulo();
    }
    getPrecio():string{
        return this.precio_entrada+"€";
    }
    getAsientos():IAsiento[][]{
        return this.asientos;
    }
    getEdadMinima():number{
        return this.peliculas.getEdadMinima();
    }
}