class Espectador extends Persona {
    protected edad:number;
    protected dinero:number;

    constructor(name:string, edad:number, dinero:number){
        super(name);
        this.edad = edad;
        this.dinero = dinero;
    }
}