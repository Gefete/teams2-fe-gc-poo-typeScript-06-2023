let persona1 = new Persona();
let peli1 = new Pelicula(persona1);

// Coge por prompt el numero de Espectadores que entraran al cine
let quantity:number = +prompt("Introduzca el numero de espectadores")!;

// Condicional que controla que sea un numero positivo y que sea un valor valido number
if (quantity<=0 || isNaN(quantity)){
    //Valor predeterminado
    quantity = 82; 
}

// Metodo que genera el array de espectadores
const generateEspectators = (cantidad:number):Espectador [] => {
    let espectators:Espectador []=[];

    // Bucle que va generando nuevos espectadores en cada array
    for (let i = 0; i < cantidad; i++) {
        espectators[i]=new Espectador();
    }  

    return espectators;
}

// Creamos un objeto cine, se le pasa 
let cine = new Cine(82, peli1, generateEspectators(quantity));

// Se saca por consola la informacion del objeto cine 
peli1.toString();

// Los siguientes elementos Pasan los valores a elementos HTML con las Ids (titulo, precio, edad)
document.getElementById("titulo")!.innerHTML = cine.getTituloPeli();
document.getElementById("precio")!.innerHTML = cine.getPrecio();
document.getElementById("edad")!.innerHTML = "Edad Mínima: "+cine.getEdadMinima();

// Muestra el objeto cine para comprobar valores
console.log(cine); 

// Metodo que asigna los asientos a los espectadores
cine.asignarAsientos(); 

// Metodo que Añade las Id de los elementos en el array HTMLCollection y otra informacion del Espectador
const createVisual = (): void=>{ 
    // Guarda en variable el multiarray
    let asientos = cine.getAsientos();
    
    // Coge el array de elementos html con la clase asiento y los guarda en un HTMLCollection
    let elementos:HTMLCollectionOf<Element> = document.getElementsByClassName("asiento");

    // Indica la posicion del array de elemntos HTML
    let increment=0;

    // Bucles que recorren los asientos creados en la clase cine
    for (let i = 0; i < asientos.length; i++) {
        for (let j = 0; j < asientos[0].length; j++) {
            
            //Castea el Element a HTMLElemnt para poder cambiar los atributos sin problemas
            let elemento = elementos[increment] as HTMLElement;

            //Añade la ID del elemento HTML a partir de los atributos de asientos
            elemento.id = asientos[i][j].fila+asientos[i][j].letra; 

            //Cambia el texto interno para se vea parecido al que se asigna a la ID
            elemento.innerText = asientos[i][j].fila+asientos[i][j].letra;  

            //Añade como titulo flotante los datos del Espectador sentado
            elemento.title = asientos[i][j].persona;

            // Pasa al siguiente HTML Element del Array HTMLCollection de los Ids asientos
            increment++;
        } 
    }
}

createVisual();

// Metodo que modifica visualmente el html si el asiento esta ocupado o no
const asignVisual = ():void=>{

    // Guarda en variable el multiarray de asientos
    let asientos = cine.getAsientos(); 

    // Doble array por que tiene que recorrer filas y columnas de un array multidimensional
    for (let i = 0; i < asientos.length; i++) {
        for (let j = 0; j < asientos[0].length; j++) {

            // registra el elemento que tenga como ID el nombre del asiento
            let elemento = document.getElementById(asientos[i][j].fila+asientos[i][j].letra)!;
            // Si esta ocupado por un Espectador se pinta de color rojo
            if (asientos[i][j].ocupado){
                elemento.style.background = "red";
            // Si esta libre de verde
            }else{
                elemento.style.background = "green";
            }
        }
    }
}

asignVisual();