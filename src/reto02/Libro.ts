class Libro {
    protected ISBN: string;
    protected titulo: string;
    protected autor: string;
    protected n_pag: number;

    constructor() {
        this.ISBN = this.generarISBN();
        this.titulo = this.generarTitulo();
        this.autor = this.generarNombre();
        this.n_pag = this.generarPaginas();
    }

    getISBN(): string {
        return this.ISBN;
    }

    setISBN(ISBN: string) {
        this.ISBN = ISBN;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    setAutor(autor: string) {
        this.autor = autor;
    }

    getN_pag(): number {
        return this.n_pag;
    }

    setN_pag(n_pag: number) {
        this.n_pag = n_pag;
    }
    
    toString(): void{

        console.log(this.titulo+" con "+this.ISBN+" creado por "+this.autor+" tiene "+this.n_pag);
    }
    
    generarTitulo(): string{

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
        let preposicion: String;

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

    // He creado el ISBN en base al sistema de generación de EAN's: https://es.wikipedia.org/wiki/European_Article_Number
    generarISBN(): string{

        let codigoPais: string, codigo_empresa: string, codigo_producto: string, digito_control: string;
        let sumaPares: number = 0;
        let sumaImpares: number = 0;
        let sumaTotal: number = 0;
        let decenaSuperior: number = 0;
        let ISBN;

        // Creo un aleatorio para codigoPais, que convierto en string
        codigoPais = (Math.floor(Math.random()*1000)+1).toString();

        // codigoPais debe ser un número de 3 dígitos, así que controlo los 0 de delante
        if(Number(codigoPais) < 10)
        {
            codigoPais = "00"+codigoPais;
        }
        if((Number(codigoPais) >= 10) && (Number(codigoPais)<100))
        {
            codigoPais = "0"+codigoPais;
        }

        // Creo también un aleatorio para codigo_empresa. También lo convierto a string
        codigo_empresa = (Math.floor(Math.random()*100000)+1).toString();

        // En los ifs controlo también que codigo_empresa tenga 5 dígitos en total. Así que tiene dos if más
        if(Number(codigo_empresa) < 10)
        {
            codigo_empresa = "0000"+codigo_empresa;
        }
        if((Number(codigo_empresa) >= 10) && (Number(codigo_empresa)<100))
        {
            codigo_empresa = "000"+codigo_empresa;
        }
        if((Number(codigo_empresa) >= 100) && (Number(codigo_empresa)<1000))
        {
            codigo_empresa = "00"+codigo_empresa;
        }
        if((Number(codigo_empresa) >= 1000) && (Number(codigo_empresa)<10000))
        {
            codigo_empresa = "0"+codigo_empresa;
        }

        // Lo mismo con codigo_producto
        codigo_producto = (Math.floor(Math.random()*10000)+1).toString();

        // En los ifs controlo también que codigo_producto complete los 12 dígitos en total.
        if(Number(codigo_producto) < 10)
        {
            codigo_producto = "000"+codigo_producto;
        }
        if((Number(codigo_producto) >= 10) && (Number(codigo_producto)<100))
        {
            codigo_producto = "00"+codigo_producto;
        }
        if((Number(codigo_producto) >= 100) && (Number(codigo_producto)<1000))
        {
            codigo_producto = "0"+codigo_producto;
        }

        // Uno todo en la variable digito_control para hacer el cálculo del 13 dígito
        digito_control = ""+codigoPais+codigo_empresa+codigo_producto;

        // Recorro el código de 12 dígitos, al revés
        for (let i = digito_control.length-1; i >= 0; i--) {
            // Y sumo el total de los valores dentro de cada posición par e impar en su propia variable
            if(i%2 == 0)
            {
                sumaPares += Number(digito_control.charAt(i));
            }else{
                sumaImpares += Number(digito_control.charAt(i));
            }
        }
        // Sumo el total de los valores en posiciones par e impar, multiplicando antes x3 los que están
        // en posiciones impares
        sumaTotal = sumaPares + (sumaImpares*3);
        // Del total anterior, saco la decena superior
        decenaSuperior = Math.ceil(sumaTotal/10)*10;

        // Controlo que, si la resta de la decena superior - la suma total es divisible por 10
        if((decenaSuperior - sumaTotal)%10 == 0)
        {
            // El dígito de control es = 0
            digito_control = "0";
        }else{
            // Sino, el dígito es simplemente la resta
            digito_control = (decenaSuperior - sumaTotal).toString();
        }

        // El ISBN será la unión de todo lo anteriormente generado y calculado, unido
        ISBN = ""+codigoPais+codigo_empresa+codigo_producto+digito_control;
    
        return ISBN;
    }

    generarNombre(): string{
    
        // Las variables creadas son: 1. La que almacena el nombre 2. La que recibirá la inicial para ponerla en mayúscula
        // 3. Un array predefinido con las letras que, creo, crearán nombres con más sentido 4. El tamaño aleatorio
        // del nombre entre 3 y 7 carácteres
        let nombre: string = "";
        let inicial: string;
        // Se puede ver que las 5 primeras posiciones son las vocales y el resto consonantes. Esto es importante para los if del for
        let letras: string = "aeioubcdfjlmnprst";
        let tamano: number = Math.floor(Math.random()*(7-3+1)+3);

        // Recorremos el tamaño aleatorio del random que se ha creado
        for (let i = 0; i < tamano; i++) {
            
            // Si estamos en el principio del nombre
            if(i == 0)
            {
                // Y el tamaño del nombre es 3
                if(tamano == 3)
                {
                    // Fuerzo a que el primer caracter sea una vocal
                    inicial = letras[Math.floor(Math.random()*4)];
                    // Y la pongo en mayúscula
                    nombre = inicial.toUpperCase();
                }else{
                    // Sino, pues que coja un carácter aleatorio entre todos, incluidas las vocales
                    inicial = letras[Math.floor(Math.random()*letras.length)];
                    nombre = inicial.toUpperCase();
                }
                // Si el tamaño no es 3
            }else{
                // Simplemente voy comprobando que la letra anterior no sea otra consonante u otra vocal
                // Es decir, nunca voy a tener una vocal seguida de una vocal ni una consonante seguida de una consonante
                if((nombre.charAt(i-1) == 'a') || (nombre.charAt(i-1) == 'e') ||(nombre.charAt(i-1) == 'i') ||
                (nombre.charAt(i-1) == 'o') || (nombre.charAt(i-1) == 'u') || 
                (nombre.charAt(i-1) == 'A') || (nombre.charAt(i-1) == 'E') ||(nombre.charAt(i-1) == 'I') ||
                (nombre.charAt(i-1) == 'O') || (nombre.charAt(i-1) == 'U'))
                {
                    nombre += letras[Math.floor(Math.random()*((letras.length-1)-5+1))+5];
                }else{
                    nombre += letras[Math.floor(Math.random()*5)];
                }
            }
        }
        return nombre;
    }

    generarPaginas(): number{
        
        let paginas: number;

        paginas = Math.floor(Math.random()*573)+53;

        return paginas;
    }

    compararHojas(libro:Libro):string{
        if(this.n_pag > libro.n_pag){
            return "El libro: "+this.titulo+" es el que más páginas tiene "+this.n_pag;
        }else if(this.n_pag ==libro.n_pag){
            return "El libro: "+this.titulo+", y "+libro.titulo+"tienen las mismas páginas "+this.n_pag;
        }else{
            return "El libro: "+libro.titulo+" es el que más páginas tiene "+libro.n_pag;
        }
        
    }
}