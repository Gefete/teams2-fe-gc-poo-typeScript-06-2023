"use strict";
// ===== TIPOS Y CONSTANTES =====
const materias = ["Matemáticas", "Filosofía", "Física"];
// ===== VARIABLES NECESARIAS =====
let profesor;
let estudiantes = new Array(30);
let aula;
// ===== VARIABLES PARA PROFESOR =====
let nombreProfesor;
let edadProfesor;
let sexoProfesor;
let materiaProfesor;
// ===== VARIABLES PARA ESTUDIANTE =====
let nombreEstudiante;
let edadEstudiante;
let sexoEstudiante;
let calificacionEstudiante;
let contadorAsistentes = 0;
let contadorFaltantes = 0;
// ===== VARIABLE PARA AULA =====
let aulaMateria;
// =====  =====
let alumnosElements = document.querySelectorAll(".alumno");
let pupitresElements = document.querySelectorAll(".pupitre");
let parrafoProfesor = document.createElement("p");
let parrafoMateria = document.createElement("p");
let parrafoMensaje = document.createElement("p");
// ===== ASIGNAMOS VALOR A VARIABLES DE PROFESOR =====
nombreProfesor = generarNombre();
edadProfesor = generarEdad();
sexoProfesor = generarSexo();
materiaProfesor = materias[Math.floor(Math.random() * materias.length)];
profesor = new Profesor(nombreProfesor, edadProfesor, sexoProfesor, materiaProfesor);
// ===== LLENAMOS ARRAY ESTUDIANTES CON ESTUDIANTES =====
for (let i = 0; i < estudiantes.length; i++) {
    nombreEstudiante = generarNombre();
    edadEstudiante = generarEdad();
    sexoEstudiante = generarSexo();
    calificacionEstudiante = generarCalificacion();
    estudiantes[i] = new Estudiante(nombreEstudiante, edadEstudiante, sexoEstudiante, calificacionEstudiante);
    if (estudiantes[i].getAsistencia() == true) {
        contadorAsistentes++;
    }
    else {
        contadorFaltantes++;
    }
}
// ===== ASIGNAMOS UN VALOR A LA MATERIA DEL AULA =====
aulaMateria = materias[Math.floor(Math.random() * materias.length)];
let mostrarProfesor = document.getElementById("mesa_profesor");
let mostrarMateria = document.getElementById("pizarra");
let mostrarMensaje = document.getElementById("mensaje_pizarra");
let mostrarAsistentes = document.getElementById("alumnos_asistentes");
let mostrarFaltantes = document.getElementById("alumnos_faltantes");
mostrarProfesor.appendChild(parrafoProfesor);
parrafoProfesor.textContent = nombreProfesor + " (" + materiaProfesor + ")";
mostrarMateria.appendChild(parrafoMateria);
parrafoMateria.textContent = aulaMateria;
mostrarAsistentes.textContent = contadorAsistentes;
mostrarFaltantes.textContent = contadorFaltantes;
if (aulaMateria == materiaProfesor) {
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].getAsistencia() == true) {
            let alumnos = alumnosElements[i];
            let crearParrafo = document.createElement("p");
            let bgPupitres = pupitresElements[i];
            crearParrafo.textContent = estudiantes[i].getNombre();
            alumnos.appendChild(crearParrafo);
            bgPupitres.style.backgroundColor = "green";
        }
        else {
            let alumnos = alumnosElements[i];
            let crearParrafo = document.createElement("p");
            let bgPupitres = pupitresElements[i];
            crearParrafo.textContent = estudiantes[i].getNombre();
            alumnos.appendChild(crearParrafo);
            bgPupitres.style.backgroundColor = "red";
        }
    }
}
else {
    mostrarMensaje.appendChild(parrafoMensaje);
    parrafoMensaje.textContent = "El profesor se ha equivocado de clase";
}
//  ====== FUNCIONES =====
// He reutilizado el método creado en el reto02, pero le añado 2 apellidos
function generarNombre() {
    // Las variables creadas son: 1. La que almacena el nombre 2. La que recibirá la inicial para ponerla en mayúscula
    // 3. Un array predefinido con las letras que, creo, crearán nombres con más sentido 4. El tamaño aleatorio
    // del nombre entre 3 y 7 carácteres
    let nombre = "";
    let inicial;
    // Se puede ver que las 5 primeras posiciones son las vocales y el resto consonantes. Esto es importante para los if del for
    let letras = "aeioubcdfjlmnprst";
    let tamano = Math.floor(Math.random() * (7 - 3 + 1) + 3);
    // Agrego un array con los 25 apellidos más usados en España
    let apellidos = ["García", "González", "Rodríguez", "Fernández", "López",
        "Martínez", "Sánchez", "Pérez", "Gómez", "Martin",
        "Jiménez", "Ruiz", "Hernández", "Diaz", "Moreno",
        "Muñoz", "Álvarez", "Romero", "Alonso", "Gutiérrez",
        "Navarro", "Torres", "Domínguez", "Vázquez", "Ramos"];
    // Les asigno 2 apellidos a cada persona. No importa que haya repetición
    let apellido1 = Math.floor(Math.random() * 25);
    let apellido2 = Math.floor(Math.random() * 25);
    ;
    // Recorremos el tamaño aleatorio del random que se ha creado
    for (let i = 0; i < tamano; i++) {
        // Si estamos en el principio del nombre
        if (i == 0) {
            // Y el tamaño del nombre es 3
            if (tamano == 3) {
                // Fuerzo a que el primer caracter sea una vocal
                inicial = letras[Math.floor(Math.random() * 4)];
                // Y la pongo en mayúscula
                nombre = inicial.toUpperCase();
            }
            else {
                // Sino, pues que coja un carácter aleatorio entre todos, incluidas las vocales
                inicial = letras[Math.floor(Math.random() * letras.length)];
                nombre = inicial.toUpperCase();
            }
            // Si el tamaño no es 3
        }
        else {
            // Simplemente voy comprobando que la letra anterior no sea otra consonante u otra vocal
            // Es decir, nunca voy a tener una vocal seguida de una vocal ni una consonante seguida de una consonante
            if ((nombre.charAt(i - 1) == 'a') || (nombre.charAt(i - 1) == 'e') || (nombre.charAt(i - 1) == 'i') ||
                (nombre.charAt(i - 1) == 'o') || (nombre.charAt(i - 1) == 'u') ||
                (nombre.charAt(i - 1) == 'A') || (nombre.charAt(i - 1) == 'E') || (nombre.charAt(i - 1) == 'I') ||
                (nombre.charAt(i - 1) == 'O') || (nombre.charAt(i - 1) == 'U')) {
                nombre += letras[Math.floor(Math.random() * ((letras.length - 1) - 5 + 1)) + 5];
            }
            else {
                nombre += letras[Math.floor(Math.random() * 5)];
            }
        }
    }
    // Concateno los apellidos a nombre
    nombre += " " + apellidos[apellido1];
    nombre += " " + apellidos[apellido2];
    return nombre;
}
// Genero edades aleatorias entre los valores introducidos
function generarEdad() {
    let edad = Math.floor(Math.random() * (edadMaxima - edadMinima + 1) + edadMinima);
    return edad;
}
// Entre la probabilidad del 50% de que salga 0 o 1, asigno un sexo aleatorio
function generarSexo() {
    let sexo;
    sexo = Math.round(Math.random());
    if (sexo == 0) {
        return "Hombre";
    }
    else {
        return "Mujer";
    }
}
function generarCalificacion() {
    let calificacion;
    calificacion = +(Math.random() * 10).toFixed(2);
    return calificacion;
}
