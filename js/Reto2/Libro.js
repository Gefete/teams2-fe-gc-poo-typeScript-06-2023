"use strict";
class Libro {
    // toString(): void{
    //     console.log(this.titulo+" con "+this.ISBN+" creado por "+this.autor+" tiene "+this.paginas);
    // }
    // He creado el ISBN en base al sistema de generación de EAN's: https://es.wikipedia.org/wiki/European_Article_Number
    generarISBN() {
        let codigoPais, editor, numero_articulo, digito_control;
        let sumaPares;
        let sumaImpares;
        let ISBN;
        // Creo un aleatorio para codigoPais, que convierto en String
        codigoPais = (Math.floor(Math.random() * 1000)).toString();
        // codigoPais debe ser un número de 4 dígitos, así que controlo los 0 de delante
        if (Number(codigoPais) < 100) {
            codigoPais = '00' + codigoPais;
        }
        if ((Number(codigoPais) > 99) && (Number(codigoPais) < 1000)) {
            codigoPais = '0' + codigoPais;
        }
        // Creo también un aleatorio para editor. También lo convierto a String
        editor = (Math.floor(Math.random() * 10000)).toString();
        if (Number(editor) < 100) {
            editor = '000' + editor;
        }
        // En los ifs controlo también que editor tenga 5 dígitos en total. Así que tiene un if más
        if ((Number(editor) > 99) && (Number(editor) < 1000)) {
            editor = '00' + editor;
        }
        if ((Number(editor) > 999) && (Number(editor) < 10000)) {
            editor = '0' + editor;
        }
        // Lo mismo con numero_articulo
        numero_articulo = (Math.floor(Math.random() * 10000)).toString();
        if (Number(numero_articulo) < 100) {
            numero_articulo = '000' + numero_articulo;
        }
        // En los ifs controlo también que editor tenga 5 dígitos en total. Así que tiene un if más
        if ((Number(numero_articulo) > 99) && (Number(numero_articulo) < 1000)) {
            numero_articulo = '00' + numero_articulo;
        }
        if ((Number(numero_articulo) > 999) && (Number(numero_articulo) < 10000)) {
            numero_articulo = '0' + numero_articulo;
        }
        digito_control = "" + codigoPais + editor + numero_articulo;
    }
}
