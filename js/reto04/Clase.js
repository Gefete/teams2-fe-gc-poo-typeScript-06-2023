"use strict";
let profesor = new Profesor();
let estudiantes = new Array(30);
let aula = new Aula();
let mostrarProfesor = document.getElementById("profesor");
for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i] = new Estudiante();
}
if (profesor.getAsistencia() == false) {
    mostrarProfesor.textContent = profesor.getNombre();
    mostrarProfesor.textContent += "(" + profesor.getMateria() + ")";
}
console.log(profesor);
console.log(estudiantes);
console.log(aula);
