// ===== TIPOS Y CONSTANTES =====

type materias = "Matemáticas" | "Filosofía" | "Física";
const materias: string[] = ["Matemáticas", "Filosofía", "Física"];

// ===== VARIABLES NECESARIAS PARA HACER CLASE =====

let profesor: Profesor;
let estudiantes: Estudiante[] = new Array(30);
let aula: Aula;

// ===== VARIABLES PARA CREAR PROFESOR =====

let nombreProfesor: string;
let edadProfesor: number;
let sexoProfesor: tiposSexo;
let materiaProfesor: string;

// ===== VARIABLES PARA CREAR ESTUDIANTES =====

let nombreEstudiante: string;
let edadEstudiante: number;
let sexoEstudiante: tiposSexo;
let calificacionEstudiante: number;
let contadorAsistentes: number = 0;
let contadorFaltantes: number = 0;

// ===== VARIABLE PARA CREAR AULA =====

let aulaMateria: string;
let maximoAlumnos: number;

// ===== VARIABLES CON ELEMENTOS HTML QUE PINTAREMOS O MODIFICAREMOS =====

// Creamos dos colecciones de nodos (Tiene muchas semejanzas con un array: método length
// y se accede utilizando índices) que apuntan a las plazas de cada alumnot en el HTML
// para luego pintar, o no, en el código)
let alumnosElements: NodeListOf<Element> = document.querySelectorAll(".alumno");
let pupitresElements: NodeListOf<Element> = document.querySelectorAll(".pupitre");

// De esta forma, nos preparamos para crear el <p> dinámicamente
let parrafoProfesor = document.createElement("p");
let parrafoMateria = document.createElement("p");
let parrafoMensaje = document.createElement("p");

// De esta forma, apuntamos a un elemento HTML que en el futuro modificaremos
let mostrarProfesor = document.getElementById("mesa_profesor");
let mostrarMateria = document.getElementById("pizarra");
let mostrarMensaje = document.getElementById("mensaje_pizarra");

let mostrarAsistentes = document.getElementById("alumnos_asistentes");
let mostrarFaltantes = document.getElementById("alumnos_faltantes");

// ===== ASIGNAMOS VALOR ALEATORIO A VARIABLES DE PROFESOR Y CREAMOS EL OBJETO =====

nombreProfesor = generarNombre();
edadProfesor = generarEdad();
sexoProfesor = generarSexo();
materiaProfesor = materias[Math.floor(Math.random() * materias.length)];

profesor = new Profesor(nombreProfesor, edadProfesor, sexoProfesor, materiaProfesor);

// ===== ASIGNAMOS UN VALOR A LA MATERIA DEL AULA =====

aulaMateria = materias[Math.floor(Math.random() * materias.length)];
aula = new Aula(aulaMateria);
maximoAlumnos = aula.getMaxEstudiantes();

// ===== LLENAMOS ARRAY ESTUDIANTES CON ESTUDIANTES =====

for (let i = 0; i < maximoAlumnos; i++) {

    nombreEstudiante = generarNombre();
    edadEstudiante = generarEdad();
    sexoEstudiante = generarSexo();
    calificacionEstudiante = generarCalificacion();

    estudiantes[i] = new Estudiante(nombreEstudiante, edadEstudiante, sexoEstudiante,
                    calificacionEstudiante);
    // Aprovechamos el for de la creación de estudiantes para contar la cantidad total
    // de asistentes y faltantes.
    if(estudiantes[i].getAsistencia() == true){
    
        contadorAsistentes++;
    }else{

        contadorFaltantes++;
    }
}
// VALORES ALEATORIOS CREADOS ANTERIORMENTE, MUESTRO LOS QUE PERMITEN, O NO, 
// HACER CLASE: La materia que realiza el profesor, la materia que se da
// en el aula y la cantidad de alumnos asistentes y faltantes

// La primera línea agrega el <p> establecido anteriormente dentro del div 
// con ID que se encuentra en la variable "mostrarProfesor".
// La segunda modifica el contenido que muestra esa <p> con lo que queramos
mostrarProfesor.appendChild(parrafoProfesor);
parrafoProfesor.textContent = nombreProfesor+" ("+materiaProfesor+")";

mostrarMateria.appendChild(parrafoMateria);
parrafoMateria.textContent = aulaMateria;

// En este caso, al tener ya creado un span con el ID introducido en las variables
// mostrarAsistentes y mostrarFaltantes, sólo tengo que asignarle el valor
// y ya se muestra
mostrarAsistentes.textContent = contadorAsistentes;
mostrarFaltantes.textContent = contadorFaltantes;

// COMPROBACIÓN PARA PINTAR, O NO, LA CLASE

if((aulaMateria == materiaProfesor) && ((contadorAsistentes/estudiantes.length) > 0.5))
{
    for (let i = 0; i < estudiantes.length; i++) {
        
        if(estudiantes[i].getAsistencia() == true)
        {
            // Establezco las variables alumno, crearParrafo y pupitres
            // La primera apunta al div con clase alumno de la posición i
            // La segunda crea un <p> para añadirlo en el div anterior
            // La tercera apunta al div con clase pupitre de la posición i
            let alumno = alumnosElements[i];
            let crearParrafo = document.createElement("p");
            let pupitres = pupitresElements[i] as HTMLElement;

            // Asigna el valor del nombre del estudiante al <p> creado
            crearParrafo.textContent = estudiantes[i].getNombre();
            // Y añade el <p> al div
            alumno.appendChild(crearParrafo);

            // Además, pinto el background del pupitre para que se vea que el alumno asiste
            pupitres.style.backgroundColor = "green"

        }else{

            let alumno = alumnosElements[i];
            let crearParrafo = document.createElement("p");
            let pupitres = pupitresElements[i] as HTMLElement;

            crearParrafo.textContent = estudiantes[i].getNombre();
            alumno.appendChild(crearParrafo);

            pupitres.style.backgroundColor = "red"
        }
    }
    
    // MOSTRAMOS LOS ALUMN@S APROBADOS POR CONSOLA COMO SI DE UN MENSAJE DEL PROFESOR SE TRATARA

    console.log("El profesor se levanta y empieza a hablar: ");
        console.log("Las alumnas aprobadas son: ");
        for (let i = 0; i < estudiantes.length; i++) {
            
            if((estudiantes[i].getSexo() == "Mujer") && (estudiantes[i].getCalificacion() >= 5)){

                console.log(estudiantes[i].getNombre()+"("+estudiantes[i].getSexo()+")"+" con un "+estudiantes[i].getCalificacion());
            }
        }
        console.log("Los alumnos aprobados son: ");
        for (let i = 0; i < estudiantes.length; i++) {
            
            if((estudiantes[i].getSexo() == "Hombre") && (estudiantes[i].getCalificacion() >= 5)){

                console.log(estudiantes[i].getNombre()+"("+estudiantes[i].getSexo()+")"+" con un "+estudiantes[i].getCalificacion());
            }
        }
        
        // AÑADO ESTO ÚLTIMO PARA QUE SE PUEDA COMPROBAR QUE LO ANTERIOR ES CORRECTO

        console.log("Pueden comprobar todas las notas en el siguiente mensaje: ");
        for (let i = 0; i < estudiantes.length; i++) {
            
            console.log(estudiantes[i].getNombre()+"("+estudiantes[i].getSexo()+")"+" con un "+estudiantes[i].getCalificacion());
        }
}else{
    // SI LA CONDICIÓN INICIAL NO SE HA CUMPLIDO, PINTO VISUALMENTE ELEMENTOS PARA QUE SE VEA MEJOR
    // LA RAZÓN DE NO REALIZAR CLASE

    if(aulaMateria != materiaProfesor){

        let resaltarMateriaAula = document.querySelector("#pizarra p");
        let resaltarMateriaProfesor = document.querySelector("#mesa_profesor p");

        resaltarMateriaAula.style.color = "red";
        resaltarMateriaProfesor.style.color = "red";

        mostrarMensaje.appendChild(parrafoMensaje);
        parrafoMensaje.textContent = "El profesor se ha equivocado de clase";
        parrafoMensaje.style.color = "red";
    }else{
        
        let resaltarAlumnosFaltantes = document.querySelector(".asistencia_alumnos p");

        resaltarAlumnosFaltantes.style.color = "red";

        mostrarMensaje.appendChild(parrafoMensaje);
        parrafoMensaje.textContent = "Faltan alumnos para hacer la clase";
        parrafoMensaje.style.color = "red";
    }
}

//  ====== FUNCIONES =====

// He reutilizado el método creado en el reto02, pero le añado 2 apellidos
function generarNombre () : string{
        
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
    nombre += " "+apellidos[apellido1];
    nombre += " "+apellidos[apellido2];

    return nombre;
}

// Genero edades aleatorias entre los valores introducidos
function generarEdad (): number{
    
    let edad = Math.floor(Math.random()*(edadMaxima-edadMinima+1)+edadMinima);

    return edad;
}

// Entre la probabilidad del 50% de que salga 0 o 1, asigno un sexo aleatorio
function generarSexo (): tiposSexo{

    let sexo: number;

    sexo = Math.round(Math.random());

    if(sexo == 0)
    {
        return "Hombre";
    }else{

        return "Mujer";
    }
}

function generarCalificacion () : number{

    let calificacion: number;

    calificacion = +(Math.random()*10).toFixed(2);

    return calificacion;
}