class Espectador extends Persona {
    private edad:number;
    private dinero:number;

    constructor(){
        super();
        this.edad = Math.floor(Math.random() * 70)+4;
        this.dinero = Math.floor(Math.random() * 50);
    }

    getMoney():number{
        return this.dinero;
    }
    getAge():number{
        return this.edad;
    }
    
    toString():string{
        return this.name+" "+this.lastName+" edad: "+this.edad +" dinero: "+this.dinero;
    }
}