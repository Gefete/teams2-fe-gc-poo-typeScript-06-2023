//  ===== CONSTANTES =====

type tiposSexo = "Hombre" | "Mujer";

class Persona{

//  ===== ATRIBUTOS =====

        protected nombre: String;
        protected edad: number;
        protected sexo: tiposSexo;

//  ===== CONSTRUCTOR =====

    constructor (newEdadMinima: number, newEdadMaxima: number) {

        this.nombre = this.generarNombre();
        this.edad = this.generarEdad(newEdadMinima,newEdadMaxima);
        this.sexo = this.generarSexo();
    }

//  ===== SETTERS =====

    setNombre (newNombre: String): void{

        this.nombre = newNombre;
    }

    setEdad (newEdad: number): void{

        this.edad = newEdad;
    }

    setSexo (newSexo: tiposSexo): void{

        this.sexo = newSexo;
    }

//  ===== GETTERS =====

    getNombre (): String{

        return this.nombre;
    }

    getEdad (): number{

        return this.edad;
    }

    getSexo (): tiposSexo{

        return this.sexo;
    }

//  ===== toString() =====

    toString(): void{

        console.log(this.nombre+" tiene "+this.edad+" años y es "+this.sexo);
    }

//  ===== MÉTODOS =====

// He reutilizado el método creado en el reto02, pero le añado 2 apellidos
    generarNombre(): string{
        
        // Las variables creadas son: 1. La que almacena el nombre 2. La que recibirá la inicial para ponerla en mayúscula
        // 3. Un array predefinido con las letras que, creo, crearán nombres con más sentido 4. El tamaño aleatorio
        // del nombre entre 3 y 7 carácteres
        let nombre: string = "";
        let inicial: string;
        // Se puede ver que las 5 primeras posiciones son las vocales y el resto consonantes. Esto es importante para los if del for
        let letras: string = "aeioubcdfjlmnprst";
        let tamano: number = Math.floor(Math.random()*(7-3+1)+3);
        // Agrego un array con los 25 apellidos más usados en España
        let apellidos: string[] = ["García", "González", "Rodríguez", "Fernández", "López", 
                                "Martínez", "Sánchez", "Pérez", "Gómez", "Martin", 
                                "Jiménez", "Ruiz", "Hernández", "Diaz", "Moreno", 
                                "Muñoz", "Álvarez", "Romero", "Alonso", "Gutiérrez", 
                                "Navarro", "Torres", "Domínguez", "Vázquez", "Ramos"];
        // Les asigno 2 apellidos a cada persona. No importa que haya repetición
        let apellido1: number = Math.floor(Math.random()*25);
        let apellido2: number = Math.floor(Math.random()*25);;

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

        // Concateno los apellidos a nombre
        nombre += " "+apellido1;
        nombre += " "+apellido2;

        return nombre;
    }

    // Genero edades aleatorias entre los valores introducidos
    generarEdad(edadMinima: number, edadMaxima: number): number{

        let edad = Math.floor(Math.random()*(edadMaxima-edadMinima+1)+edadMinima);

        return edad;
    }

    // Entre la probabilidad del 50% de que salga 0 o 1, asigno un sexo aleatorio
    generarSexo(): tiposSexo{

        let sexo: number;

        sexo = Math.round(Math.random());

        if(sexo == 0)
        {
            return "Hombre";
        }else{

            return "Mujer";
        }
    }

    // Asigno una disponibilidad, según el % de probabilidad deseada que se introduzca
    disponibilidadPersona(newProbabilidad: number): boolean{

        let asistencia;
        // Lo divido entre 10 para poder sacar un decimal entre 0-1 para compararlo con el que sale de Math.random
        let probabilidad = newProbabilidad/10;

        // Si el random generado es mayor que la probabilidad, la persona asiste
        asistencia = Math.random() >= probabilidad;

        return asistencia;
    }

}