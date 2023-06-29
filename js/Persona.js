"use strict";
class Persona {
    constructor() {
        this.name = this.generateName();
        this.lastName = this.generateLastName();
    }
    // Metodos para recoger datos
    getName() { return this.name; }
    ;
    getLastName() { return this.lastName; }
    ;
    // Metodo que genera nombre aleatorio
    generateName() {
        const namesList = ["Pedro", "Sofia", "Oscar", "Nuria", "Fernando", "Laura", "Sergio", "Gonzalo", "Claudia", "Esther", "Roberto"];
        let namePosition = Math.floor(Math.random() * namesList.length);
        return namesList[namePosition];
    }
    // dsfwsfuwshfu
    // Metodo que genera apellido aleatorio
    generateLastName() {
        const lastNameList = ["Muñoz", "Soto", "Martinez", "Vizcaya", "Linares", "Garcia", "Lopez", "Perez", "Hernandez"];
        let lastNamePosition = Math.floor(Math.random() * lastNameList.length);
        return lastNameList[lastNamePosition];
    }
}
