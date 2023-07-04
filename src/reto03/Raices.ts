class Raices{

    //  ===== ATRIBUTOS =====
    
    private a: number;
    private b: number;
    private c: number;

    //  ===== CONSTRUCTOR =====

    constructor (newA: number, newB: number, newC: number){

        this.a = newA;
        this.b = newB;
        this.c = newC;
    }

    //  ===== SETTERS =====

    setA(newValue: number): void{

        this.a = newValue;
    }

    setB(newValue: number): void{

        this.b = newValue;
    }

    setC(newValue: number): void{

        this.c = newValue;
    }

    //  ===== GETTERS =====

    getA(): number{

        return this.a;
    }
    
    getB(): number{

        return this.b;
    }
    
    getC(): number{

        return this.c;
    }

    //  ===== MÉTODOS =====

    getDiscriminante(): number{

        let discriminante;

        discriminante = (this.b**2)-4*this.a*this.c;

        return discriminante;
    }
    
    // El discriminante puede ser positivo, cero o negativo y esto determina cuántas soluciones 
    // (o raíces) existen para la ecuación cuadrática dada.

    // Un discriminante positivo indica que la cuadrática tiene dos soluciones reales distintas.
    tieneRaices():boolean {
        return this.getDiscriminante() > 0 ? true : false;
    }

    // Un discriminante de cero indica que la cuadrática tiene una solución real repetida.
    tieneRaiz():boolean {
        return this.getDiscriminante() === 0 ? true : false;
    }

    


    // Metodo que coge los metodos obtenerRaices y obtenerRaiz segun los metodos tieneRaices o tieneRaiz lo indique
    calcular():void{
        if(this.tieneRaices()){
            this.obtenerRaices();
        }else if(this.tieneRaiz()){
            this.obtenerRaiz();
        }else{
            console.log("no tiene solucion");
        }
    }

    // Metodo que calcula las 2 soluciones de la equaciones 2n grado
    obtenerRaices():void{
        if(this.tieneRaices()){
            let operacion2nGradopositive = (-this.b+Math.sqrt((this.b**2)-(4*this.a*this.c)))/(2*this.a);
            console.log(operacion2nGradopositive);
            let operacion2nGradonegative = (-this.b-Math.sqrt((this.b**2)-(4*this.a*this.c)))/(2*this.a);
            console.log(operacion2nGradonegative);
        }else{
            console.log("solo tiene una solucion")
        }
    }

    //  Metodo que calcula la solucion de la equaciones 2n grado en caso de que solo salga una segun el discriminante
    obtenerRaiz():void{
        if(this.tieneRaiz()){
            let operacion2nGradon= (-this.b-Math.sqrt((this.b**2)-(4*this.a*this.c)))/(2*this.a);
            console.log(operacion2nGradon);
        }else{
            console.log("No tiene una sola solucion")
        }
    }

}
