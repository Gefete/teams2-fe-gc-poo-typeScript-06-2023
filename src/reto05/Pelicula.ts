class Pelicula{

    // ====== ATRIBUTOS =====

    private titulo: string;
    private duracion: number;
    private edad_minima: number;
    private director: Persona;

    // ====== CONSTRUCTOR =====
    
    constructor (){
        this.titulo = this.generarTitulo();
        this.duracion = this.generarDuracion();
        this.edad_minima = this.generarEdadMinima();
        this.director = new Persona();
    }

    // ====== SETTERS =====

    setTitulo (newTitulo: string) : void{

        this.titulo = newTitulo;
    }
    
    setDuracion (newDuracion: number) : void{

        this.duracion = newDuracion;
    }
        
    setEdadMinima (newEdad: number) : void{

        this.edad_minima = newEdad;
    }

    setDirector (newDirector: Persona) : void{

        this.director = newDirector;
    }

    // ====== GETTERS =====

    getTitulo () : string{

        return this.titulo;
    }
    
    getDuracion () : number{

        return this.duracion;
    }
        
    getEdadMinima () : number{

        return this.edad_minima;
    }

    getDirector () : Persona{

        return this.director;
    }
    
    // ====== toString() =====

    toString () : void{

        console.log(this.titulo+" tiene una duración de "+this.duracion+" minutos, la edad mínima para el visionado son "+
        this.edad_minima+" años y el creador es "+this.director);
    }

    // ====== MÉTODOS =====

    // Con mi generador de nombres automático, creo el nombre de la película
    generarTitulo () : string{

        // Creo la variable que recogerá el título
        let titulo: string;
        // Creo una variable predefinida con 2 artículos. Ambos singulares.
        let titulo_articulos: string[] = ["La", "El"];
        // Creo otra variable con 40 sustantivos diferentes y en singular. Los 20 primeros femeninos, 20 últimos masculinos
        let titulo_sustantivos1: string[] = ["Casa", "Inteligencia", "Orquesta", "Jirafa", "Mesa", "Lámpara", "Cara", "Moto", "Radio", "Foto", 
        "Canción", "Emoción", "Televisión", "Conversión", "Sazón", "Razón", "Contención", "Claridad", "Verdad", "Sociedad", 
        "Camión", "Recuerdo", "Rebaño", "Perro", "Cura", "Fantasma", "Mapa", "Sistema", "Mundo", "Techo", 
        "Deseo", "Rodaje", "Maquillaje", "Homenaje", "Refrán", "Desdén", "Motín", "Camión", "Escalón", "Atún"];
        // Otra variable con 10 adjetivos diferentes predefinidos
        let titulo_adjetivos: string[] = ["Grande", "Pequeño", "Rápido", "Lento", "Fuerte", "Débil", "Caliente", "Frío", "Feliz", "Triste"];
        // 20 sustantivos más, 10 femeninos y 10 masculinos. Todos singulares
        let titulo_sustantivos2 = ["Ambulancia", "Ametralladora", "Antropóloga", "Araña", "Armonía", "Arpa", "Arquitectura", "Atracción", "Bendición", "Bicicleta", 
        "Aceite", "Edificio", "Panteón", "Acero", "Ejército", "Papel", "Ajedrez", "Endoscopio", "Paquete", "Alcohol"];
        // Creo 3 variables para controlar y almacenar los random y poder hacer modificaciones. La última almacenará una string
        let articuloGenero: number;
        let sustantivos1Genero: number;
        let adjetivosGenero: number;
        let sustantivos2Genero: number;
        let preposicion: string;

        // Genero el random para el género del artículo del título
        articuloGenero = Math.round(Math.random());
        // Si es femenino, fuerzo a que busque un sustantivo femenino de la lista de sustantivos1
        if(articuloGenero == 0){

            sustantivos1Genero = Math.floor(Math.random()*19);
        }else{
            // Sino, busca entre los 20 masculinos del final
            sustantivos1Genero = Math.floor(Math.random()*((titulo_sustantivos1.length-1)-20+1))+20;
        }

        adjetivosGenero = Math.floor(Math.random()*9);

        // Genero el random del sustantivo 2
        sustantivos2Genero = Math.floor(Math.random()*20);
        // Si es menor que 10, es femenino y la preopisición será "de la"
        if(sustantivos2Genero<10)
        {
            preposicion = " de la ";
            // Sino, será "del"
        }else{
            
            preposicion = " del ";
        }

        // Asigno a título un valor de cada uno de los arrays anteriormente establecidos para generar un título aleatorio
        titulo = ""+titulo_articulos[articuloGenero]+" "+titulo_sustantivos1[sustantivos1Genero]+" "+
                    titulo_adjetivos[adjetivosGenero]+preposicion+ titulo_sustantivos2[sustantivos2Genero];

        return titulo;
    }

    // Genero la duración de la película
    generarDuracion () : number{

        let duracion: number;

        // Duración aleatoria entre 48 y 300 minutos
        duracion = Math.floor(Math.random()*(300-48+1)+48);

        return duracion;
    }

    // También una edad
    generarEdadMinima () : number{

        // Comprendida entre los siguientes valores
        let edades: number[] = [0,7,12,16,18];
        let edad: number;

        edad = edades[Math.floor(Math.random()*edades.length)];

        return edad;
    }
}


/* class Pelicula{
    // Vairable
    private titulo:string;
    private duracion:number;
    private edad_minima:string;
    private director:Persona;
    
    constructor(titulo:string){
        this.titulo = titulo;
        this.duracion = Math.floor(Math.random() * 60)+160;
        this.edad_minima = this.generateAgeCalification();
        this.director = new Persona();
    }

    generateAgeCalification (): string{
        let option = Math.floor(Math.random() * 5);
        switch (option) {
            case 0:
                return "7";
                break;
            case 0:
                return "12";
                break;
            case 0:
                return "16";
                break;
            case 0:
                return "18";
                break;
            default:
                return "A";
                break;
        }
    }



} */