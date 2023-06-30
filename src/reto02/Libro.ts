class Libro{

    // toString(): void{

    //     console.log(this.titulo+" con "+this.ISBN+" creado por "+this.autor+" tiene "+this.paginas);
    // }

    
    generarTitulo(): String{

        // Creo la variable que recogerá el título
        let titulo: String;
        // Creo una variable predefinida con 2 artículos. Ambos singulares.
        let titulo_articulos: String[] = ["La", "El"];
        // Creo otra variable con 20 sustantivos diferentes y en singular. Los 10 primeros femeninos, 10 últimos masculinos
        let titulo_sustantivos1: String[] = ["Casa", "Inteligencia", "Orquesta", "Jirafa", "Mesa", "Lámpara", "Cara", "Moto", "Radio", "Foto", 
        "Canción", "Emoción", "Televisión", "Conversión", "Sazón", "Razón", "Contención", "Claridad", "Verdad", "Sociedad", 
        "Camión", "Recuerdo", "Rebaño", "Perro", "Cura", "Fantasma", "Mapa", "Sistema", "Mundo", "Techo", 
        "Deseo", "Rodaje", "Maquillaje", "Homenaje", "Refrán", "Desdén", "Motín", "Camión", "Escalón", "Atún"];
        // Otra variable con 10 adjetivos diferentes predefinidos
        let titulo_adjetivos: String[] = ["Grande", "Pequeño", "Rápido", "Lento", "Fuerte", "Débil", "Caliente", "Frío", "Feliz", "Triste"];
        // 20 sustantivos más, 10 femeninos y 10 masculinos. Todos singulares
        let titulo_sustantivos2 = ["Casa", "Inteligencia", "Orquesta", "Jirafa", "Mesa", "Lámpara", "Cara", "Moto", "Radio", "Foto", 
        "Camión", "Recuerdo", "Rebaño", "Perro", "Cura", "Fantasma", "Mapa", "Sistema", "Mundo", "Techo"];

        // Asigno a título un valor de cada uno de los arrays anteriormente establecidos para generar un título aleatorio
        titulo = ""+titulo_articulos[Math.round(Math.random())]+
                    titulo_sustantivos1[Math.floor(Math.random()*19)]+
                    titulo_adjetivos[Math.floor(Math.random()*9)]+
                    titulo_sustantivos2[Math.floor(Math.random()*19)];

        return titulo;
    }

    // He creado el ISBN en base al sistema de generación de EAN's: https://es.wikipedia.org/wiki/European_Article_Number
    generarISBN(): String{

        let codigoPais: String, editor: String, numero_articulo: String, digito_control: String;
        let sumaPares: number = 0;
        let sumaImpares: number = 0;
        let sumaTotal: number = 0;
        let decenaSuperior: number = 0;
        let ISBN;

        // Creo un aleatorio para codigoPais, que convierto en String
        codigoPais = (Math.floor(Math.random()*1000)).toString();
        // codigoPais debe ser un número de 4 dígitos, así que controlo los 0 de delante
        if(Number(codigoPais) < 100)
        {
            codigoPais = "00"+codigoPais;
        }
        if((Number(codigoPais) > 99) && (Number(codigoPais)<1000))
        {
            codigoPais = "0"+codigoPais;
        }

        // Creo también un aleatorio para editor. También lo convierto a String
        editor = (Math.floor(Math.random()*10000)).toString();
        if(Number(editor) < 100)
        {
            editor = "000"+editor;
        }
        // En los ifs controlo también que editor tenga 5 dígitos en total. Así que tiene un if más
        if((Number(editor) > 99) && (Number(editor)<1000))
        {
            editor = "00"+editor;
        }
        if((Number(editor) > 999) && (Number(editor)<10000))
        {
            editor = "0"+editor;
        }

        // Lo mismo con numero_articulo
        numero_articulo = (Math.floor(Math.random()*10000)).toString();

        if(Number(numero_articulo) < 100)
        {
            numero_articulo = "000"+numero_articulo;
        }
        // En los ifs controlo también que editor tenga 5 dígitos en total. Así que tiene un if más
        if((Number(numero_articulo) > 99) && (Number(numero_articulo)<1000))
        {
            numero_articulo = "00"+numero_articulo;
        }
        if((Number(numero_articulo) > 999) && (Number(numero_articulo)<10000))
        {
            numero_articulo = "0"+numero_articulo;
        }

        digito_control = ""+codigoPais+editor+numero_articulo;

        for (let i = digito_control.length-1; i >= 0; i++) {
            
            if(i%2 == 0)
            {
                sumaPares += Number(digito_control.charAt(i));
            }else{
                sumaImpares += Number(digito_control.charAt(i));
            }
        }

        sumaTotal = sumaPares + (sumaImpares*3); 
        decenaSuperior = Math.ceil(sumaTotal);

        if((decenaSuperior - sumaTotal)%10 == 0)
        {

            digito_control = "0";
        }else{

            digito_control = (decenaSuperior - sumaTotal).toString();
        }

        ISBN = ""+codigoPais+editor+numero_articulo+digito_control;
    
        return ISBN;
    }

    generarNombre(): String{

        // Las variables creadas son: 1. La que almacena el nombre 2. La que recibirá la inicial para ponerla en mayúscula
        // 3. Un array predefinido con las letras que, creo, crearán nombres con más sentido 4. El tamaño aleatorio
        // del nombre entre 3 y 7 carácteres
        let nombre: String = "";
        let inicial: String;
        // Se puede ver que las 5 primeras posiciones son las vocales y el resto consonantes. Esto es importante para los if del for
        let letras: String = "aeioubcdfjlmnprst";
        let tamano: number = Math.floor(Math.random()*7)+3;

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
                (nombre.charAt(i-1) == 'o') || (nombre.charAt(i-1) == 'u'))
                {
                    nombre += letras[Math.floor(Math.random()*letras.length)+5];
                }else{
                    nombre += letras[Math.floor(Math.random()*4)];
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
}
