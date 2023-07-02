let cine = new Cine(82);
let titulo = cine.getTituloPeli();
let precio = cine.getPrecio();
let edad = cine.getEdadMinima();
/* console.log(`Titulo: ${titulo}`);
console.log(`Precio entrada: ${precio}`); */
console.log(cine.toString());
document.getElementById("titulo")!.innerHTML = titulo;
document.getElementById("precio")!.innerHTML = precio;
document.getElementById("edad")!.innerHTML = "Edad Mínima: "+edad;


console.log(cine); // Muestra el objeto cine para comprobar valores



cine.asignarAsientos(); // Metodo que asigna los asientos a los espectadores



const createVisual = (): void=>{
    let asientos = cine.getAsientos(); // Guarda en variable el multiarray
    
    // Coge el array de elementos html con la clase col
    let elementos:HTMLCollectionOf<Element> = document.getElementsByClassName("col");

    // incremental que indica la posicion del array de elemntos HTML ya que no es multiarray
    let increment=0;

    // Bucles que recorren los asientos creados en la clase cine
    for (let i = 0; i < asientos.length; i++) {
        for (let j = 0; j < asientos[0].length; j++) {
            
            let elemento = elementos[increment] as HTMLElement;//Castea el Element a HTMLElemnt para poder cambiar los atributos sin problemas
            elemento.id = asientos[i][j].fila+asientos[i][j].letra; // Añade la ID del elemento HTML a partir de los atributos de asientos
            elemento.innerText = asientos[i][j].fila+asientos[i][j].letra; // Cambia el texto interno para se vea parecido al que se asigna a la ID
            elemento.title = asientos[i][j].persona;
            increment++;

        }
        
    }
}

createVisual();

const asignVisual = ():void=>{
    let asientos = cine.getAsientos(); // Guarda en variable el multiarray

    for (let i = 0; i < asientos.length; i++) {
        for (let j = 0; j < asientos[0].length; j++) {

            // registra el elemento que tenga como ID el nombre del asiento
            let elemento = document.getElementById(asientos[i][j].fila+asientos[i][j].letra)!;
            // Si esta ocupado por un Espectador se pinta de color rojo
            if (asientos[i][j].ocupado){
                elemento.style.color = "red";
            // Si esta libre de verde
            }else{
                elemento.style.color = "green";
            }

        }
        
    }
}

asignVisual();