class Espectador extends Persona {
    protected edad:number;
    protected dinero:number;

    constructor(){
        super();
        this.edad = Math.floor(Math.random() * 70)+4;
        this.dinero = Math.floor(Math.random() * 50);
    }

    
}