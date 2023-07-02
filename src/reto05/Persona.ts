class Persona {
    protected name:string;
    protected lastName:string;

    constructor(){
        this.name = this.generateName();
        this.lastName = this.generateLastName();
    }

    // Metodos para recoger datos
    getName():string {return this.name};
    getLastName():string {return this.lastName};

    // Metodo que genera nombre aleatorio
    generateName():string{
        const namesList = ["Pedro", "Sofia", "Oscar", "Nuria", "Fernando", "Laura", 
        "Sergio", "Gonzalo", "Claudia", "Esther", "Roberto", "Andrés", "Jhon", "Gerard", 
        "Ana", "Eva", "Juan", "Sara"];
        let namePosition:number = Math.floor(Math.random() * namesList.length);
        return namesList[namePosition];
    }

    // Metodo que genera apellido aleatorio
    generateLastName():string{
        const lastNameList = ["Muñoz", "Soto", "Martinez", "Vizcaya", "Linares", "Garcia", 
        "Lopez", "Perez", "Hernandez", "Rodrigez", "Gonzalez", "Fernandez", "Sanchez", 
        "Gomez", "Martin", "Duarte", "Villalba", "Rojas", "Ortiz"];
        let lastNamePosition:number = Math.floor(Math.random() * lastNameList.length);
        return lastNameList[lastNamePosition];
    }
    
}