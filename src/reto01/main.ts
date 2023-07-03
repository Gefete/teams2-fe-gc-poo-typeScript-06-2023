let listaSeries: Serie[] = [];
let listaVideojuegos: Videojuego[] = [];

listaSeries[0] = new Serie("Serie01", "Creador01");
listaSeries[0].setTemporadas(4);
listaSeries[1] = new Serie("Serie02", "Creador02");
listaSeries[1].setTemporadas(10);
listaSeries[1].entregar();
listaSeries[2] = new Serie("Serie03", "Creador03");
listaSeries[2].setTemporadas(1);
listaSeries[3] = new Serie("Serie04", "Creador04");
listaSeries[3].setTemporadas(11);
listaSeries[4] = new Serie("Serie05", "Creador05");
listaSeries[4].setTemporadas(5);

listaVideojuegos[0] = new Videojuego("Videojuego01", "Genereo01", "Compañia01");
listaVideojuegos[0].setHorasEstimadas(100);
listaVideojuegos[1] = new Videojuego("Videojuego02", "Genereo02", "Compañia02");
listaVideojuegos[1].setHorasEstimadas(200);
listaVideojuegos[2] = new Videojuego("Videojuego03", "Genereo03", "Compañia03");
listaVideojuegos[2].setHorasEstimadas(199);
listaVideojuegos[2].entregar();
listaVideojuegos[3] = new Videojuego("Videojuego04", "Genereo04", "Compañia04");
listaVideojuegos[3].setHorasEstimadas(201);
listaVideojuegos[4] = new Videojuego("Videojuego05", "Genereo05", "Compañia05");
listaVideojuegos[4].setHorasEstimadas(70);

let i: number;
let count: number = 0;

//variables donde guardamos la serie y el videojuego mas grande, segun compareTo()
let serie_mas_temp: Serie = listaSeries[0];
let videojuego_mas_horas: Videojuego = listaVideojuegos[0];

for (i = 0; i < 5; i++) {
  //numeros de series y videojuegos entregados
  if (listaSeries[i].isEntregado()) count++;
  if (listaVideojuegos[i].isEntregado()) count++;

  let tempSerie: Serie = listaSeries[i];
  if (tempSerie.compareTo(serie_mas_temp) < 0) {
    serie_mas_temp = tempSerie;
  }

  let tempVideojuego: Videojuego = listaVideojuegos[i];
  if (tempVideojuego.compareTo(videojuego_mas_horas) < 0) {
    videojuego_mas_horas = tempVideojuego;
  }
}

console.log(`El total de series y videojuegos entregados es ${count}`);
console.log(`La serie con mas temporadas es ${serie_mas_temp.toString()}`);
console.log(`El videojuego con mas horas es ${videojuego_mas_horas.toString()}`);
