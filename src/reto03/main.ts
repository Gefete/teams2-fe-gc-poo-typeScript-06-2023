console.log()
// Operacion con una sola solucion
console.log("Operacion con una sola solucion");
let operacion = new Raices(1,2,1);
operacion.calcular();

// Operacion con 2 soluciones
console.log("Operacion con 2 soluciones");
let operacion2 = new Raices(1,-5,6);
operacion2.calcular();

// Operacion sin ninguna solucion
console.log("Operacion sin ninguna solucion");
let operacion3 = new Raices(1,1,1);
operacion3.calcular();