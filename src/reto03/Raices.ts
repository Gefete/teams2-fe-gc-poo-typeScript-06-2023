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

    getDiscriminante(aValue: number, bValue: number, cValue: number): number{

        let discriminante;

        discriminante = (bValue**2)-4*aValue*cValue;

        return discriminante;
    }
}